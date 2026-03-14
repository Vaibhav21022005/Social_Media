import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContex";

const Comments = () => {

  const {currentUser} = useContext(AuthContext)
  const comments = [
    {
      id: 1,
      name: "Vaibhav",
      userId: 1,
      profilePic: "https://i.pravatar.cc/150?img=3",
      desc: "Hello Welcome to my new home",
    },
    {
      id: 2,
      name: "Yash",
      userId: 2,
      profilePic: "https://i.pravatar.cc/150?img=5",
      desc: "Beautiful house view 🌅",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hr ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;