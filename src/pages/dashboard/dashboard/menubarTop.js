import React, {useState, useEffect, useRef, useCallback} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../store/action/login'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

export default function MenubarTop(props){
    const { _id } = props

    const dispatch = useDispatch()
    const [subMenuBar, setsubMenuBar] = useState(false)
    const [menuProfile, setmenuProfile] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [profile, setProfile] = useState("")
    const [mount, setMount] = useState(false)

    const refreshPage = () => { <Redirect to="/" />; }
    const id = useSelector(state => state.Auth._id)

    let path = window.location.pathname

    const getUser = async (ID) => {
      try {
        let data = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/getuser`, {id: ID} );
        setProfile(data.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    useEffect(() => {
      if(id === ''){
        return true
      } else if(id !== ''){
        getUser(id)
      }
    }, [id])
    
    const handleLogout = () => {
      console.log('asuk')
        dispatch ({
            type : logoutUser()
        })
      window.location.href="/"
    }

    const {date, email, firstName, lastName, startupName, startupLogo} = profile

    return (
      <div className={subMenuBar ? "wrap-menu-bar-top-platform wrap-menu-bar-top-platform-active" : "wrap-menu-bar-top-platform"}>
        <div className="wrap-menu-bar-top-platform-in">
          {/* user meta dropdown */}
          <div className="user-meta-bar-top-right-platform">
            {/* notification */}
            <div className="setting-icon-cta">
              <div className="bt-notification-cta">
                <div className="bt-hide-notification-cta" />
                <div className="bt-show-notification-cta">
                  <i className="fa fa-bell-o" />
                </div>
              </div>
            </div>
            <div className="icon-user-info-meta-platform">
              <div className="bt-hide-profile-box" />
              <div className="bt-show-profile-box">
                <div className="img-icon-user-meta-p">
                  <img src={`${process.env.REACT_APP_URL}${startupLogo}`} alt="" />
                </div>
                <div className="name-user-company-meta">
                  {startupName ? startupName : firstName + " " + lastName}
                </div>
                <span className="icon-dropdown-s-metap">
                  <i className="fa fa-angle-up" style={{display: 'none'}} />
                  <i onClick={() => setmenuProfile(!menuProfile)} className="fa fa-angle-down" />
                </span>
              </div>
            </div>
          </div>
          {/* breadcumb */}
          <div className="wrap-breadcumb-bar-top-p">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li> {path.slice(1)} </li>
            </ul>
          </div>
        </div>
        {/* profile box */}
        <div className={menuProfile ? "wrap-profile-box-user wrap-profile-box-user-active" : "wrap-profile-box-user"}>
          <div className="item-profile-box-user">
            {/* username ava name */}
            <div className="item-user-ava-name">
              <div className="item-user-ava-img">
                <img src={`${process.env.REACT_APP_URL}${startupLogo}`} alt="" />
              </div>
              <div className="item-user-ava-text">
                <h4 className="user-text-ava-name-1">{firstName}</h4>
                <h4 className="user-text-ava-name-2">{startupName ? startupName : firstName}</h4>
              </div>
              <div className="clear" />
            </div>
            <Link to={`/Dashboard-profile-page/${id}`}>
              <a href="#" className="bt-view-profile-user-dash">View Profile</a>
            </Link>
          </div>
          <ul className="menu-list-user-dashboard-box">
            <li><a href="#">Help</a></li>
            <li><a onClick={() => {handleLogout()}} href="#" className="bt-view-profile-user-dash">Logout</a></li>
          </ul>
        </div>
        {/* notification box */}
        <div className="wrap-notification-box">
          <div className="bar-head-notification-box">
            Notification
          </div>
          <div className="bar-list-notification-box">
            {/* item */}
            <div className="item-list-notification-box">
              <a href="#">
                <div className="item-list-notification-box-info">
                  <h5 className="title-notification-box-time">
                    30 min ago
                  </h5>
                  <h4 className="title-notification-box-desc">
                    Your schedule of <span>Mentoring Session</span> with Shinta W Dhanuwardoyo have been set 
                  </h4>
                </div>
                <div className="img-notification-box">
                  <img src="images/avashinta.png" alt="" />
                </div>
              </a>
            </div>
            {/* item */}
          </div>
        </div>
      </div>
    )
}