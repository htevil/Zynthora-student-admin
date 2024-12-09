import "./index.css";
import Search_logo from "../../asset/search_logo.png"
import Bell_logo from "../../asset/bell_logo.png"
import Messages_logo from "../../asset/message_logo.png"
import profile_logo from '../../asset/profile_logo.jpg';

export default function Header(){
    return(
        <header>
        <div className="hea-search">
          <img src={Search_logo} alt="Search" className="hea_img" />
          <span> Search</span>
        </div>
        <div className="profile-header">
          <div className="profile-info">
            <div>
              <div className="profile-name">Srishti Ahuja</div>
              <div className="profile-role">Admin</div>
            </div>
            <img src={profile_logo} alt="Profile-img" className="profile-img" />
          </div>
          <div className="profile-actions">
            <div className="icon-wrapper">
              <img src={Messages_logo} alt="Messages" className="icon" />
              <span className="badge blue">1</span>
            </div>
            <div className="icon-wrapper">
              <img src={Bell_logo} alt="Bell-icon" className="icon" />
              <span className="badge red">3</span>
            </div>
          </div>
        </div>

      </header>
    )
};