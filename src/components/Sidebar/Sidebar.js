import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Modal} from 'react-bootstrap'

import ava from '../../assets/images/avadash.png'
import imgvid from '../../assets/images/imgvid.png'
import home from '../../assets/images/mn-home.png'
import pitch from '../../assets/images/mn-pitch.png'
import pitchdeck from '../../assets/images/mn-pitchdeck.png'
import ibm1 from '../../assets/images/ibm1.png'
import ibm2 from '../../assets/images/ibm2.png'
import ibm3 from '../../assets/images/ibm3.png'
import mnbot1 from '../../assets/images/mnbot1.png'
import mnbot2 from '../../assets/images/mnbot2.png'
import idashboard from '../../assets/images/idashboard.png'
import idashboardActive from '../../assets/images/idashboard-active.png'
import ipitch from '../../assets/images/ipitch.png'
import ipitchActive from '../../assets/images/ipitch-active.png'
import ipitchdeckf from '../../assets/images/ipitchdeckf.png'
import ipitchdeckfActive from '../../assets/images/ipitchdeckf-active.png'
import ischedule from '../../assets/images/ischedule.png'
import ischeduleActive from '../../assets/images/ischedule-active.png'
import sd1 from '../../assets/images/sd1.png'

function Sidebar (params) {
  const [Sidebar, setSidebar] = useState(false)
  const [Dots, setDots] = useState(false)
  const [Path, setPath] = useState(window.location.pathname)
  const [Profile, setProfile] = useState('')

  const id = useSelector(state => state.Auth._id)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  
  const renderSubMenu = () => {
    if(window.location.pathname == "/Dashboard"){
      return (
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
      )
    } else if ( window.location.pathname == "/Dashboard-Pitch"){
      return (
        <div className="p-sub-menu-platform-left">
          <ul>
            <li className="active">
              <a href="#">
                <div className="icon-sub-menu-p-l">
                  <img src={ipitch} className="imenu-normal" alt="" />
                  <img src={ipitchActive} className="imenu-active" alt="" />
                </div>
                <div className="text-sub-menu-p-l">VC Directory</div>
                <div className="clear" />
              </a>
            </li>
          </ul>
        </div>
      )
    } else if ( window.location.pathname == "/Dashboard-Pitchdeck"){
      return (
        <div className="p-sub-menu-platform-left">
          <ul>
            <li className="active">
              <a href="#">
                <div className="icon-sub-menu-p-l">
                  <img src={ipitchdeckf} className="imenu-normal" alt="" />
                  <img src={ipitchdeckfActive} className="imenu-active" alt="" />
                </div>
                <div className="text-sub-menu-p-l">Dashboard</div>
                <div className="clear" />
              </a>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="p-sub-menu-platform-left">
          <ul>
            <li className="active">
              <a href="#">
                <div className="icon-sub-menu-p-l">
                  <img src={ipitchdeckf} className="imenu-normal" alt="" />
                  <img src={ipitchdeckfActive} className="imenu-active" alt="" />
                </div>
                <div className="text-sub-menu-p-l">Dashboard</div>
                <div className="clear" />
              </a>
            </li>
          </ul>
        </div>
      )
    }
  }
  
  return (
    <>
      {/* menu bar left */}
      <div className="wrap-p-bar-menu-left">
        <div className="wrap-expand-sub-menu-bar-left">
          {/* hide */}
          <div className={Sidebar ? "icon-expand-hide-sub-menu-bar-left icon-expand-hide-sub-menu-bar-left-active" : "icon-expand-hide-sub-menu-bar-left"}>
            <i onClick={() => {setSidebar(!Sidebar)}} className="fa fa-arrow-left" />
          </div>
          {/* hide */}
          <div className={Sidebar ? "icon-expand-show-sub-menu-bar-left" : "icon-expand-hide-sub-menu-bar-left icon-expand-hide-sub-menu-bar-left-active"}>
            <i onClick={() => {setSidebar(!Sidebar)}} className="fa fa-arrow-right" />
          </div>
        </div>
        {/* avatar */}
        <div className="icon-avatar-dashboard">
          <a href="#">
            <div className="img-icon-user-meta-p ml-2 mt-1">
              <Link to="/Dashboard">
                {
                  Profile ? <img src={`${process.env.REACT_APP_URL}${Profile.startupLogo}`} alt="" />
                  : null
                }
              </Link>
            </div>
          </a>
        </div>
        {/* menu */}
        <ul className="menu-button-platform">
          <li className={Path === "/Dashboard" ? "active" : ""}>
            <Link to="/Dashboard">
              <div className="img-icon-menu-platform">
                <img src={home} alt="" />
              </div>
              <h4 className="title-bt-menu-plat">
                Home
              </h4>
            </Link>
          </li>
          <li className={Path === "/Dashboard-Pitch" ? "active" : ""}>
            <Link to="/Dashboard-Pitch">
              <div className="img-icon-menu-platform">
                <img src={pitch} alt="" />
              </div>
              <h4 className="title-bt-menu-plat">
                pitch
              </h4>
            </Link>
          </li>
          <li className={Path === "/Dashboard-Pitchdeck" ? "active" : ""}>
            <Link to="/Dashboard-Pitchdeck">
              <div className="img-icon-menu-platform">
                <img src={pitchdeck} alt="" />
              </div>
              <h4 className="title-bt-menu-plat">
                pitchdeck
              </h4>
            </Link>
          </li>
        </ul>
        {/* menu bot */}
        <div className="wrap-menu-bot-info-platform">
          <ul>
            <li><a onClick={handleShow} ><img src={mnbot1} alt="" /></a></li>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
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
                                        Hi {Profile.firstName} <img src="images/icon-intro-hi.png" alt="" />
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
                                        <p></p>
                                        <ul>
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
                </Modal.Body>
              </Modal>
            </ul>
            <ul>
                <li><a onClick={() => setDots(!Dots)} className="bt-box-web-req"><img src={mnbot2} alt="" /></a></li>
            </ul>
        </div>

        
        {/* box button 3 circle */}
        <div className={Dots ? "barmn-circle-menu-left-box-info barmn-circle-menu-left-box-info-active" : "barmn-circle-menu-left-box-info"}>
          <ul className="mn-menu-list-bar-box-i">
            <li>
              <a href="#"><img src={ibm1} alt="" /><span>Founders Community</span></a>
              <div className="clear" />
            </li>
            <li>
              <a href="#"><img src={ibm2} alt="" /><span>Submit a Bug</span></a>
              <div className="clear" />
            </li>
            <li>
              <a href="#"><img src={ibm3} alt="" /><span>Request a Feature</span></a>
              <div className="clear" />
            </li>
          </ul>
        </div>
      </div>
      {/* sub menu bar left */}
      <div className={Sidebar ? "wrap-p-sub-menu-bar-left wrap-p-sub-menu-bar-left-active" : "wrap-p-sub-menu-bar-left"}>
          <div className="container-in-p-sub-menu-left">
          {/* name user */}
          <div className="item-name-user-info">
              <h2 className="title-name-user-info-platform">
                  {Profile.firstName}
              </h2>
              <h3 className="title-name-user-info-platform2">
                {Profile.startupName}
              </h3>
          </div>
          {/* sub menu */}
          {
            renderSubMenu()
          } 
          </div>
      </div>     
    </>
  )
}

export default Sidebar