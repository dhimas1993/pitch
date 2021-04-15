import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import MenubarTop from "../../pages/dashboard/dashboard/menubarTop";
import Sidebar from '../../components/Sidebar/Sidebar'
import Account from './Account'
import Dashboard from './Dashboard'
import Personal from './Personal'
import Company from './Company'
import Subscription from './Subcription';

import imgvid from '../../assets/images/imgvid.png'
import idashboard from '../../assets/images/idashboard.png'
import idashboardActive from '../../assets/images/idashboard-active.png'
import ischedule from '../../assets/images/ischedule.png'
import ischeduleActive from '../../assets/images/ischedule-active.png'
import bgprofile from '../../assets/images/bgprofile.png'


function Profile (props){
  const [SubMenuBar, setSubMenuBar] = useState(false)
  const [Dots, setDots] = useState(false)
  const [Profile, setProfile] = useState('')
  const [Data, setData] = useState('')
  const [Menu, setMenu] = useState(1)
  
  const id = useSelector(state => state.Auth._id)

  const getUser = async (ID) => {
    try {
      let data = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/users/${ID}`)
      setProfile(data.data.users)
      setData(data.data)
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

  return (
    <>      
      <div id="modalintrod" className="modal fade custom-modal-introdashboard" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="bt-close-popup-pitch" data-dismiss="modal">
              <i className="fa fa-close" />
            </div>
            <div className="modal-body">
              {/* intro */}
              <div className="wrap-intro-content-dashboard">
                <div className="heading-banner-intro-d">
                  <h3 className="title-banner-intro-d-p">
                    Hi Elon <img src="images/icon-intro-hi.png" alt="" />
                  </h3>
                  <h4 className="title-banner-intro-d-p2">
                    Learn how you can get the most out of PitchUp
                  </h4>
                </div>
                <div className="wrap-content-intro-dashboard">
                  <div className="content-intro-dashboard-t">
                    <h3><b>Intro to PitchUp</b></h3>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                    </p>
                    <p>
                      <img src={imgvid} alt="" />
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                    </p>
                    <p>
                    </p><ul>
                      <li>loprem</li>
                      <li>loprem consetetur sadipscing elitr consetetur sadipscing elitr</li>
                      <li>loprem consetetur sadipscing elitr</li>
                      <li>loprem wdasdqwdqw</li>
                      <li>loprem</li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* menu bar left */}
      <Sidebar {...Profile}/>
      {/* sub menu bar left */}
      <div className={SubMenuBar ? "wrap-p-sub-menu-bar-left wrap-p-sub-menu-bar-left-active" : "wrap-p-sub-menu-bar-left"}>
        <div className="container-in-p-sub-menu-left">
          {/* name user */}
          <div className="item-name-user-info">
            <h2 className="title-name-user-info-platform">
              Elon Musk
            </h2>
            <h3 className="title-name-user-info-platform2">
              Founder at Company X
            </h3>
          </div>
          {/* sub menu */}
          <div className="p-sub-menu-platform-left">
            <ul>
              <li className="active">
                <a href="#">
                  <div className="icon-sub-menu-p-l">
                    <img src={idashboard} className="imenu-normal" alt="" />
                    <img src={idashboardActive} className="imenu-active" alt="" />
                  </div>
                  <div className="text-sub-menu-p-l">Dashboard</div>
                  <div className="clear" />
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon-sub-menu-p-l">
                    <img src={ischedule} className="imenu-normal" alt="" />
                    <img src={ischeduleActive} className="imenu-active" alt="" />
                  </div>
                  <div className="text-sub-menu-p-l">Schedule</div>
                  <div className="clear" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* menu bar top */}
      <MenubarTop item={id}/>
      {/* content platform */}
      <div className={SubMenuBar ? "wrap-all-content-platform wrap-all-content-platform-active" : "wrap-all-content-platform "}>
        <div className="wrap-profile-page">
          {/* header profile */}
          <div className="header-profile-background">
            <img src={bgprofile} alt />
          </div>
          {/* section content profile */}
          <div className="wrap-section-content-profile-dashboard">
            {/* menu profile left */}
            <div className="section-profile-dashboard-left">
              <div className="wrap-sec-ava-info-account">
                {/* avatar */}
                <div className="profile-d-ava">
                  <img src={`${process.env.REACT_APP_URL}${Profile.startupLogo}`} alt />
                </div>
                {/* name */}
                <h3 className="title-account-name-d">{Profile.firstName + " " + Profile.lastName}</h3>
                {/* company name */}
                <h3 className="title-account-name-d2">{Profile.startupName}</h3>
                <a onClick={() => setMenu(5)} href="javascript:void(0)" className="bt-manage-account-d">Manage your account</a>
              </div>
              <div className="wrap-menu-dashboard-profile-page">
                <ul className="menu-dashboard-profile-page">
                  <li onClick={() => setMenu(1)}  data-mtab="pdashboard" className={Menu === 1 ? "active" : null}><i className="fa fa-line-chart" /> Dashboard</li>
                  <li onClick={() => setMenu(2)} data-mtab="ppersonalinfo" className={Menu === 2 ? "active" : null}><i className="fa fa-user " /> Personal Information</li>
                  <li onClick={() => setMenu(3)} data-mtab="pcompanyinfo" className={Menu === 3 ? "active" : null}><i className="fa fa-building" /> Company Information</li>
                  <li onClick={() => setMenu(4)} data-mtab="psubscription" className={Menu === 4 ? "active" : null}><i className="fa fa-usd " /> Subscription</li>
                  {/* <li data-mtab="pyourapp"><i class="fa fa-file-text"></i> Your Application</li> */}
                </ul>
                <div className="clear" />
              </div>
            </div>
            {/* content profile right */}
            <div className="section-profile-dashboard-right">
              {/* item tab */}
              <div className={Menu === 5 ? "item-tab-dashboard-profile-page2-active" : "item-tab-dashboard-profile-page2 "} id="pmysettings">
                <Account {...Profile}/>
              </div>
              {/* item tab */}
              <div className={Menu === 1 ? "item-tab-dashboard-profile-page item-tab-dashboard-profile-page-active" : "item-tab-dashboard-profile-page"} id="pdashboard">
                <Dashboard {...Data}/>
              </div>
              {/* item tab */}
              <div className={Menu === 2 ? "item-tab-dashboard-profile-page item-tab-dashboard-profile-page-active" : "item-tab-dashboard-profile-page"} id="ppersonalinfo">
                <Personal {...Profile}/>
              </div>
              {/* item tab */}
              <div className={Menu === 3 ? "item-tab-dashboard-profile-page item-tab-dashboard-profile-page-active" : "item-tab-dashboard-profile-page"} id="pcompanyinfo">
                <Company {...Profile}/>
              </div>
              {/* item tab */}
              <div className={Menu === 4 ? "item-tab-dashboard-profile-page item-tab-dashboard-profile-page-active" : "item-tab-dashboard-profile-page"} id="psubscription">
                <Subscription {...Profile}/>
              </div>
            </div>

            <div className="clear" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile

