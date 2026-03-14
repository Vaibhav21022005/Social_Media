import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Vaibhav",
      userId: 1,
      profilePic: "https://i.pravatar.cc/150?img=3",
      desc: "Hello Welcome to my new home",
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    },
    {
      id: 2,
      name: "Yash",
      userId: 2,
      profilePic: "https://i.pravatar.cc/150?img=5",
      desc: "Beautiful house view 🌅",
      img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
    {
      id: 3,
      name: "Amit",
      userId: 3,
      profilePic: "https://i.pravatar.cc/150?img=8",
      desc: "Sunset vibes at the beach 🌅",
      img: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    },
    {
      id: 4,
      name: "Sneha",
      userId: 4,
      profilePic: "https://i.pravatar.cc/150?img=12",
      desc: "Nature always heals 🌿",
      img: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    },
    {
      id: 5,
      name: "Rahul",
      userId: 5,
      profilePic: "https://i.pravatar.cc/150?img=15",
      desc: "City lights at night ✨",
      img: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
    },
    {
      id: 6,
      name: "Priya",
      userId: 6,
      profilePic: "https://i.pravatar.cc/150?img=20",
      desc: "Coffee and coding ☕💻",
      img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      id: 7,
      name: "Rohan",
      userId: 7,
      profilePic: "https://i.pravatar.cc/150?img=25",
      desc: "Adventure in the mountains 🏔️",
      img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    },
    {
      id: 8,
      name: "Anjali",
      userId: 8,
      profilePic: "https://i.pravatar.cc/150?img=28",
      desc: "Calm lake morning 🌊",
      img: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    },
    {
      id: 9,
      name: "Karan",
      userId: 9,
      profilePic: "https://i.pravatar.cc/150?img=30",
      desc: "Road trip memories 🚗",
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    },
    {
      id: 10,
      name: "Meera",
      userId: 10,
      profilePic: "https://i.pravatar.cc/150?img=32",
      desc: "Golden hour glow ✨",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
    {
      id: 11,
      name: "Arjun",
      userId: 11,
      profilePic: "https://i.pravatar.cc/150?img=35",
      desc: "Weekend chill mode 😎",
      img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
    {
      id: 12,
      name: "Ishita",
      userId: 12,
      profilePic: "https://i.pravatar.cc/150?img=40",
      desc: "Beautiful skyline view 🌆",
      img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
