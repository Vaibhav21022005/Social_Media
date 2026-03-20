import express from "express";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//import path from "path";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";

const app = express();

// ================= MIDDLEWARE =================

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(cookieParser());

// ================= MULTER =================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/Social_Media/social_app/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

// ================= ROUTES =================

// Upload image
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json("No file uploaded");
    }

    console.log("Uploaded:", req.file.filename);

    res.status(200).json(req.file.filename);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);

// ================= SERVER =================

app.listen(8800, () => {
  console.log("API working on port 8800");
});
