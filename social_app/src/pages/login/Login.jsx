import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContex";
import { useContext } from "react";

const Login = () => {
  const {login} = useContext(AuthContext)
  const handleLogin = () =>{
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Back</h1>
          <p>
            Connect with friends and the world around you.
            Share your moments and explore new ideas.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;