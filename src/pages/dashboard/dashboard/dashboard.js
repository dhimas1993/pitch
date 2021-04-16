import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
// import Cookies from 'universal-cookie';
import {connect} from 'react-redux'
import { logoutUser } from '../../../store/action/login'
import OwlCarousel from 'react-owl-carousel2';
import CardDetail from './cardDetail'
import MenubarTop from './menubarTop'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Loading from '../../../utils/loading'
import Alert from '../../../utils/alert'

import avaShinta from '../../../assets/images/avashinta.png'
import avaIlham from '../../../assets/images/availham.png'
import sd1 from '../../../assets/images/sd1.png'
import fb1 from '../../../assets/images/fb1.png'
import iconpdf from '../../../assets/images/iconpdf.png'
import pdf from '../../../assets/images/pdf.png'

class Dashboard extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            user: '',
            slider: '',
            pitch: '',
            news: '',
            // id: Cookies.get('username'),
            data : [
              sd1, sd1, ,sd1,sd1, sd1
            ],
            options : {
              loop: true,
              autoplayTimeout: 3000,
              autoplay: true,
              touchDrag: true,
              mouseDrag: true,
              center: true,
              autoplayHoverPause: false,
              autoHeight: false,
              nav: true,
              dots: true,
              smartSpeed: 700,
              responsive:{
                0:{
                    items: 1,
                    margin: 1,
                    stagePadding: 0,
                },
                769:{
                    items:1,
                    margin: 10,
                    stagePadding: 7,
                },
                993:{
                    items:1,
                    margin: 10,
                    stagePadding: 10,
                },
                1251:{
                    items:1,
                    margin: 15,
                    stagePadding: 130,
                },
                1367:{
                    items:1,
                    margin: 50,
                    stagePadding: 150,
                }
              }
            },
            events : {
              onDragged: function(event) {},
              onChanged: function(event) {}
            },
        };
    }

    componentDidMount  (){
      this.getSlider()
      this.getVc()
      this.getNews()
    }

    getSlider = async () => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/slider/`, {mode: 'cors'})
        .then(res => {
            this.setState({slider : res.data.data})
        })
    }

    getVc = async () => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/topvc/`)
        .then(res => {
            this.setState({pitch : res.data.data})
        })
    }

    getNews = async () => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/news/`, {mode: 'cors'})
        .then(res => {
            this.setState({news : res.data.data})
        })
    }

    handle_logout = () => {
      // Menghapus username dari redux state
      this.props.logoutUser()
    }

    render(){
      // if(this.props.user.Auth.email !== ''){
        return (
          <div>
            <Sidebar {...this.props}/>
            {/* menu bar top */}
            <MenubarTop {...this.props.user.Auth}/>
            {/* content platform */}
            <div className={this.state.subMenuBar ? "wrap-all-content-platform wrap-all-content-platform-active" : "wrap-all-content-platform"}>
              {/* slider dashboard */}
              <div className="wrap-slider-dashboard">
                <div className="slider-dashboard">
                  <OwlCarousel options={this.state.options} events={this.state.events}>
                    {
                      this.state.slider ? 
                      this.state.slider.map((item, key) => {
                        return (
                              <div className="item-slide-dashboard-img">
                                <img src={`${process.env.REACT_APP_URL}/${item.file}`} alt={item.file} />
                              </div>
                            
                        )
                      })
                      : 
                      <div>
                        <Loading />
                      </div>
                    }
                  </OwlCarousel>
                </div>
              </div>
                <div className="all-wrap-content-in-platform-sec">
                  {/* row top vc/investor & mentoring */}
                  <div className="wrap-vc-investor-mentoring">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="wrap-content-platform-all-sec">
                          <div className="heading-title-line-platform-c">
                            <h3 className="title-platform-sec-c">
                              Top VC / Investor based on your background
                            </h3>
                            <a href="#" className="bt-view-all-platform-sec-c-link">View all</a>
                          </div>
                          <div className="wrap-box-vc-investor-sec-c">
                            {
                              this.state.pitch ?
                              this.state.pitch.map((item) => {
                                return (
                                  <CardDetail item={item} />
                                )
                              }) : <Loading />
                            }
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="wrap-content-platform-all-sec">
                          <div className="heading-title-line-platform-c">
                            <h3 className="title-platform-sec-c">
                              Mentoring
                            </h3>
                            <a href="#" className="bt-view-all-platform-sec-c-link">View all</a>
                          </div>
                          <div className="wrap-box-mentoring-sec-c">
                            {/* item */}
                            <div className="item-box-mentoring-sec-c">
                              <div className="item-box-mentoring-sec-ava">
                                <img src={avaShinta} alt="" />
                              </div>
                              <div className="item-box-mentoring-sec-desc">
                                <div className="item-box-mentoring-sec-desc-in-line">
                                  <h3 className="title-box-mentoring-name">
                                    Shinta W Dhanuwardoyo
                                  </h3>
                                  <h3 className="title-box-mentoring-name2">
                                    Angel Investor and CEO of BUBU.com
                                  </h3>
                                  <div className="tag-box-mentoring-sec-desc">
                                    <a href="#">Tech</a>
                                    <a href="#">B2B</a>
                                  </div>
                                </div>
                                <h4 className="title-box-mentoring-desc-info">
                                  Ms. Shinta Dhanuwardoyo, also known as Shinta Bubu, has been one of Indonesia's leader in digital industry
                                </h4>
                                <div className="section-cta-mentoring">
                                  <h4 className="title-section-mentoring-session">
                                    150 sessions
                                  </h4>
                                  <a onClick={() => Alert('SOON')} className="bt-cta-request-call-mentoring">
                                    Request a Call
                                  </a>
                                  <a onClick={() => Alert('SOON')} className="bt-cta-mentor-profile-link">
                                    View Profile
                                  </a>
                                </div>
                              </div>
                              <div className="clear" />
                            </div>
                            {/* item */}
                            <div className="item-box-mentoring-sec-c">
                              <div className="item-box-mentoring-sec-ava">
                                <img src={avaIlham} alt="" />
                              </div>
                              <div className="item-box-mentoring-sec-desc">
                                <div className="item-box-mentoring-sec-desc-in-line">
                                  <h3 className="title-box-mentoring-name">
                                    Ilham Habibie
                                  </h3>
                                  <h3 className="title-box-mentoring-name2">
                                    Deputy Chairperson of Indonesia's Chamber of commerce
                                  </h3>
                                  <div className="tag-box-mentoring-sec-desc">
                                    <a href="#">Tech</a>
                                    <a href="#">B2B</a>
                                  </div>
                                </div>
                                <h4 className="title-box-mentoring-desc-info">
                                  Ilham Habibie was the first son of former President BJ Habibie and Hasri Ainun Besari Habibie. 
                                </h4>
                                <div className="section-cta-mentoring">
                                  <h4 className="title-section-mentoring-session">
                                    150 sessions
                                  </h4>
                                  <a onClick={() => Alert('SOON')} className="bt-cta-request-call-mentoring">
                                    Request a Call
                                  </a>
                                  <a onClick={() => Alert('SOON')} className="bt-cta-mentor-profile-link">
                                    View Profile
                                  </a>
                                </div>
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* row latest news & pitch deck */}
                  <div className="wrap-vc-investor-mentoring">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="wrap-content-platform-all-sec">
                          <div className="heading-title-line-platform-c">
                            <h3 className="title-platform-sec-c">
                              Latest news in Tech
                            </h3>
                            {/* <a href="#" class="bt-view-all-platform-sec-c-link">View all</a> */}
                          </div>
                          <div className="wrap-box-latest-news">
                            {
                              this.state.news ?
                              this.state.news.map((item) => {
                                return (
                                  <div className="item-box-latest-news">
                                    <div className="item-box-latest-news-in">
                                      <div className="i-box-latest-news-img">
                                        <img src={`${process.env.REACT_APP_URL}/${item.headlinePicture}`} alt="no diplay" />
                                      </div>
                                      <h3 className="title-box-lnews-link">
                                        <a href="#">{item.title}</a>
                                      </h3>
                                      <div className="meta-i-latest-news">
                                        <img src={`${process.env.REACT_APP_URL}/${item.companyLogo}`} alt="" />
                                        <div className="tag-lnews-link">
                                          <a href="#">{item.companyName}</a>
                                          <span className="time-lnews-post">
                                            6h ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                              : null
                            }
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="wrap-content-platform-all-sec">
                          <div className="heading-title-line-platform-c">
                            <h3 className="title-platform-sec-c">
                              Pitch Deck Status
                            </h3>
                            {/* <a href="#" class="bt-view-all-platform-sec-c-link">View all</a> */}
                          </div>
                          <div className="wrap-pitchdeck-box-content">
                            {/* item */}
                            <div className="item-pitchdeck-box-c">
                              <div className="row">
                                <div className="col-lg-5">
                                  <div className="img-pitchdeck-pdf-info">
                                    <div className="img-pitchdeck-thumb">
                                      {/* <img src="images/pitchimg.png" alt=""> */}
                                      <img data-pdf-thumbnail-file="text.pdf" data-pdf-thumbnail-width={400} src={pdf} />
                                    </div>
                                    <div className="img-pitchdeck-title-pdf">
                                      <img src={iconpdf} alt="" />
                                      <span>Pitch Deck_SID.PDF</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-7">
                                  <div className="info-pitchdeck-curated-desc">
                                    <div className="status-pitchdeck-info">
                                      <span className="status-pitchdeck-info1">Status: </span>
                                      <span className="status-pitchdeck-info2">curated</span>
                                      {/* <span class="status-pitchdeck-info3">uncurated</span> */}
                                    </div>
                                    <h3 className="title-feedbackby">
                                      Feedback by
                                    </h3>
                                    <div className="info-feedbackby-user">
                                      <div className="info-feedbackby-user-ava">
                                        <img src={fb1} alt="" />
                                      </div>
                                      <div className="info-feedbackby-user-info">
                                        <h4 className="title-info-user-info-c">
                                          Erwin Arifin
                                        </h4>
                                        <h4 className="title-info-user-info-c2">
                                          Head of Startupindonesia.co
                                        </h4>
                                      </div>
                                      <div className="clear" />
                                    </div>
                                    <a href="#" className="bt-view-detail-pitchdeck-i">
                                      View Details
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        );
      // } else {
      //   return <Redirect to='/'/>
      // }
    }
}

const mapStateToProps = state => {
  return {
    user : state
  }
}

export default connect(mapStateToProps, {logoutUser})(Dashboard)