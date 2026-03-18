import "./home.scss"
import Stories from "../../conponents/stories/Stories"
import Posts from "../../conponents/posts/Posts"
import Share from "../../conponents/share/Share"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share />
      <Posts/>
    </div>
  )
}

export default Home
