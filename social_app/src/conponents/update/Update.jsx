import { useState } from "react";
import { makeRequest } from "../../axios";
import "./update.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Update = ({ setOpenUpdate, user }) => {

  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [texts, setTexts] = useState({
    email: user.email,
    name: user.name,
    city: user.city,
    website: user.website,

    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // ================= UPLOAD =================
  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const queryClient = useQueryClient();

  // ================= MUTATION =================
  const mutation = useMutation({
    mutationFn: (updatedUser) => {
      return makeRequest.put("/users", updatedUser);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();

    let coverUrl = user.coverPic;
    let profileUrl = user.profilePic;

    // ✅ FIXED (no swapping)
    if (cover) {
      const uploadedCover = await upload(cover);
      if (uploadedCover) coverUrl = uploadedCover;
    }

    if (profile) {
      const uploadedProfile = await upload(profile);
      if (uploadedProfile) profileUrl = uploadedProfile;
    }

    // ✅ BASE PAYLOAD (always sent)
    const payload = {
      email: texts.email,
      name: texts.name,
      city: texts.city,
      website: texts.website,
      coverPic: coverUrl,
      profilePic: profileUrl,
    };

    // ✅ PASSWORD ONLY IF USER FILLS ALL
    if (
      texts.oldPassword ||
      texts.newPassword ||
      texts.confirmPassword
    ) {
      // basic frontend validation
      if (
        !texts.oldPassword ||
        !texts.newPassword ||
        !texts.confirmPassword
      ) {
        alert("Please fill all password fields!");
        return;
      }

      payload.oldPassword = texts.oldPassword;
      payload.newPassword = texts.newPassword;
      payload.confirmPassword = texts.confirmPassword;
    }

    mutation.mutate(payload);

    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  return (
    <div className="update">
      <div className="wrapper">

        <h1>Update Your Profile</h1>

        <form>

          {/* ================= IMAGES ================= */}
          <div className="files">

            {/* COVER */}
            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : "/upload/" + user.coverPic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>

            <input
              type="file"
              id="cover"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            />

            {/* PROFILE */}
            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : "/upload/" + user.profilePic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </label>

            <input
              type="file"
              id="profile"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />

          </div>

          {/* ================= TEXT ================= */}

          <label>Email</label>
          <input
            type="text"
            value={texts.email}
            name="email"
            onChange={handleChange}
          />

          <label>Name</label>
          <input
            type="text"
            value={texts.name}
            name="name"
            onChange={handleChange}
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            value={texts.city}
            onChange={handleChange}
          />

          <label>Website</label>
          <input
            type="text"
            name="website"
            value={texts.website}
            onChange={handleChange}
          />

          {/* ================= PASSWORD (OPTIONAL) ================= */}

          <h3 style={{ marginTop: "10px" }}>Change Password (Optional)</h3>

          <label>Old Password</label>
          <div className="passwordBox">
            <input
              type={showPassword.old ? "text" : "password"}
              name="oldPassword"
              value={texts.oldPassword}
              onChange={handleChange}
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({ ...prev, old: !prev.old }))
              }
            >
              {showPassword.old ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>

          <label>New Password</label>
          <div className="passwordBox">
            <input
              type={showPassword.new ? "text" : "password"}
              name="newPassword"
              value={texts.newPassword}
              onChange={handleChange}
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({ ...prev, new: !prev.new }))
              }
            >
              {showPassword.new ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>

          <label>Confirm Password</label>
          <div className="passwordBox">
            <input
              type={showPassword.confirm ? "text" : "password"}
              name="confirmPassword"
              value={texts.confirmPassword}
              onChange={handleChange}
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirm: !prev.confirm,
                }))
              }
            >
              {showPassword.confirm ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </span>
          </div>

          <button onClick={handleClick}>
            Update
          </button>

        </form>

        <button
          className="close"
          onClick={() => setOpenUpdate(false)}
        >
          close
        </button>

      </div>
    </div>
  );
};

export default Update;