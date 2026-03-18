import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Yash",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
    {
      id: 2,
      name: "Rahul",
      img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    },
    {
      id: 3,
      name: "Sneha",
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
    {
      id: 4,
      name: "Amit",
      img: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    },
    {
      id: 5,
      name: "Priya",
      img: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    },
  ];

  return (
    <div className="stories">
      {/* ✅ Current user's story with correct profile pic */}
      <div className="story">
        <img
          src={
            currentUser.profilePic
              ? "/upload/" + currentUser.profilePic  // ✅ /upload/ prefix added
              : "/default-avatar.png"                // ✅ fallback if no pic
          }
          alt=""
        />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {/* ✅ Added key to each story div */}
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;