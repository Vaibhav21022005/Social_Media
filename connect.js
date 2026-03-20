import mysql from "mysql";

export const db = mysql.createConnection({
  host: "********",
  user: "*******",
  password: "*********",
  database: "*********",
});

// connect to database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("MySQL Connected!");
  }
});
