import "./home.scss"
import Stories from "../../conponents/stories/Stories"
import Posts from "../../conponents/posts/Posts"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home
