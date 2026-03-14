import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggetions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <span>Vaibhav</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <span>Vaibhav</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <p>
                <span>Vaibhav</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <p>
                <span>Vaibhav</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <p>
                <span>Vaibhav</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <p>
                <span>Vaibhav</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <div className="online" />
              <span>Vaibhav</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <div className="online" />
              <span>Vaibhav</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <div className="online"/>
              <span>Vaibhav</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <div className="online"/>
              <span>Vaibhav</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <div className="online"/>
              <span>Vaibhav</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://i.pravatar.cc/150?img=3" alt="user" />
              <div className="online"/>
              <span>Vaibhav</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
