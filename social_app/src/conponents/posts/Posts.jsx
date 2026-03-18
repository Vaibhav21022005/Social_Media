import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {  // ✅ destructure from props

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts", userId],  // ✅ include userId so cache is per-user
    queryFn: () =>
      makeRequest.get(`/posts?userId=${userId}`).then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="posts">
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;