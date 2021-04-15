import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Sidebar from '../../../components/Sidebar/Sidebar'
import MenubarTop from '../dashboard/menubarTop';
import {Modal} from 'react-bootstrap'
import Loading from '../../../utils/loading';
import pdf from '../../../assets/images/pdf.png'
import alertRed from '../../../utils/alert'

class Dashboard_Pitch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subMenuBar : false,
            menuProfile : false,
            tab: 1,
            id: this.props.match.params.id,
            pitch: '', news: '',
            show: false,
            checked: false,
            checked1: false,
            pitchdeck : '',
            modal: 1,
            item_pitchdeck: ''
        };
    }

    componentDidMount(){
        this.getDetailPitch()
        this.getNews()
        this.renderTerm()
        this.getPitchdeck()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.pitchdeck !== ''){
            return true
        } else {
            this.getPitchdeck()
        }
    }
    
    getPitchdeck = async () => {
        const id = this.props.user.Auth._id
        let pitchdeck = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/pitchdeckByUserId`,{
            id
        }).then(res => {
            this.setState({pitchdeck : res.data})
        }).catch(err => {
            console.log(err.message)
        })
    }

    getDetailPitch = async () => {
        const result = axios.get(`${process.env.REACT_APP_BASE_URL}/pitch/pitch/${this.state.id}`)
        .then((res) => {
            this.setState({pitch : res.data})
        })
    }

    getNews = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/news/`)
          .then(res => {
              this.setState({news : res.data.data})
          })
    }

    handleSubmitPitchdeck =async () => {
        try {
            const data = {
                id_file : this.state.item_pitchdeck,
                id_pitch : this.state.id,
                id_user : this.props.user.Auth._id
            }

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/submit_pitchdeck`, data)
            console.log(response.data)
            if (response.data === "SUCCESS"){
                this.setState({ modal : 2 })
            } else {
                alertRed("FAIL", response.data)
                this.setState({ modal : 1 })
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    handleTerms = async () => {
        const id = this.props.user.Auth._id
        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/submit_terms`,{
            id
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    renderModalIntro = () => {
        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} 
                    onHide={() => this.setState({show : false})}
                >
                    <Modal.Body>
                        <div class="modal-content">
                            <div class="bt-close-popup-pitch" data-dismiss="modal">
                                <i class="fa fa-close"></i>
                            </div>
                            <div class="modal-body">
                                <div class="wrap-pitching-process-modal">
                                    <h3 class="head-title-pitching-process">
                                        Pitching Process
                                    </h3>
                                    <div class="sec-process-column-pitching">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="step-pitching-process">
                                                    <div class="step-pitching-process-number">1</div>
                                                    <div class="step-pitching-process-text">Choose Pitchdeck</div>
                                                    <div class="clear"></div>
                                                </div>
                                                <div class="section-step-pitching-desc">
                                                    <div class="sec-step-pitching-desc-img">
                                                        <img src="images/stp1.png" alt=""/>
                                                    </div>
                                                    <h3 class="title-desc-step-pitch-text">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="step-pitching-process">
                                                    <div class="step-pitching-process-number">2</div>
                                                    <div class="step-pitching-process-text">Curation Process</div>
                                                    <div class="clear"></div>
                                                </div>
                                                <div class="section-step-pitching-desc">
                                                    <div class="sec-step-pitching-desc-img">
                                                        <img src="images/stp2.png" alt=""/>
                                                    </div>
                                                    <h3 class="title-desc-step-pitch-text">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="step-pitching-process">
                                                    <div class="step-pitching-process-number">3</div>
                                                    <div class="step-pitching-process-text">Connect to VC</div>
                                                    <div class="clear"></div>
                                                </div>
                                                <div class="section-step-pitching-desc">
                                                    <div class="sec-step-pitching-desc-img">
                                                        <img src="images/stp3.png" alt=""/>
                                                    </div>
                                                    <h3 class="title-desc-step-pitch-text">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrap-bt-next-section-step">
                                        <a href="javascript:void(0)" class="bt-next-step-pitching-process-cta" data-dismiss="modal" data-toggle="modal" data-target="#modaltermcondition" data-backdrop="static" data-keyboard="false">Next</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

    renderTerm = () => {
            // checked: false,
            // checked1: false,
        return (
            <>  
            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={this.state.show} 
                onHide={() => this.setState({show : false})}
            >
                <Modal.Body>
                    <div class="modal-content">
                        <div class="bt-close-popup-pitch" data-dismiss="modal">
                            <i class="fa fa-close"></i>
                        </div>
                        <div class="modal-body">
                            <div class="wrap-pitching-process-modal">
                                <h3 class="head-title-pitching-process2">
                                    Terms and Conditions
                                </h3>
                                <div class="box-term-condition-scroll-p">
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <div class="checklist-accept-term-condition">
                                    <div class="item-checkbox-s-filter">
                                        <label class="containerbx">
                                            <input onChange={() => this.setState({checked : !this.state.checked})} defaultChecked={this.state.checked} type="checkbox" class="checkbox-tnc1"/>
                                            <span class="checkmarkbx"></span>
                                        </label>
                                        <span class="check-item-text">Click here to indicate that you have read and agree to the terms presented in the Terms and Conditions page</span>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="item-checkbox-s-filter">
                                        <label class="containerbx">
                                            <input onChange={() => this.setState({checked1 : !this.state.checked1})} defaultChecked={this.state.checked1} type="checkbox" class="checkbox-tnc2"/>
                                            <span class="checkmarkbx"></span>
                                        </label>
                                        <span class="check-item-text">Click here to indicate that you have consented to be charged with a 2.5% success fee from the amount of total funds raised,</span>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                <div class="wrap-bt-decline-accept-tnc">
                                    <a href="javascript:void(0)" class="bt-decline-tnc" data-dismiss="modal">Decline</a>
                                    <a 
                                        onClick = {() => this.handleTerms()}
                                        href="javascript:void(0)" class={this.state.checked && this.state.checked1 ? "bt-accept-tnc bt-accept-tnc-active1 bt-accept-tnc-active2" : "bt-accept-tnc" } 
                                        data-dismiss="modal" 
                                        data-toggle="modal" 
                                        data-target="#modalchoosepitch" 
                                        data-backdrop="static" 
                                        data-keyboard="false"
                                    >
                                        Accept the Terms
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            </>
        )
    }

    renderPitchdeck = () => {
        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} 
                    onHide={() => this.setState({show : false})}
                >
                    <Modal.Body>
                        <div className="modal-content">
                            <div className="bt-close-popup-pitch" data-dismiss="modal">
                                <i className="fa fa-close" />
                            </div>
                            <div className="modal-body">
                                {/* pitching proses */}
                                <div className="wrap-pitching-process-modal">
                                    <div className="sec-process-column-pitching sec-process-column-pitching-choose">
                                        <div className="col-lg-6-item-pro">
                                            <div className="step-pitching-process step-pitching-process-active">
                                                <div className="step-pitching-process-number">1</div>
                                                    <div className="step-pitching-process-text">Choose Pitchdeck</div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6-item-pro">
                                            <div className="step-pitching-process">
                                                <div className="step-pitching-process-number">2</div>
                                                    <div className="step-pitching-process-text">Curation Process</div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="head-title-pitching-process">
                                        Choose your Pitchdeck
                                    </h3>
                                    <div className="wrap-box-pitchdeck-choose">
                                        {/* item */}
                                        {
                                            this.state.pitchdeck ? this.state.pitchdeck.map((item) => {
                                                return (
                                                    <div onClick={() => this.setState({ item_pitchdeck : item._id })} className="item-choose-pitchdeck-box">
                                                        <div className="item-choose-pitchdeck-box-2">
                                                            <input type="radio" className="choose-pitchdeck-pitch" name="choose-pitchdeck-l" />
                                                            <div className="item-choose-pitchdeck-box-in">
                                                                <div className="item-choose-pitchdeck-thumbnail-pdf">
                                                                    <img data-pdf-thumbnail-file="text.pdf" data-pdf-thumbnail-width={400} src={pdf} />
                                                                </div>
                                                                <div className="text-pdf-name-pitchdeck">
                                                                    { item.name }
                                                                </div>
                                                                <div className="img-checklist-pitchdeckchoose">
                                                                    <img src="images/cklist-pitch.png" alt />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }) : 
                                            <Link to="/Dashboard-Pitchdeck">
                                                <h3> Upload Your Pitchdeck </h3>
                                            </Link>
                                        }
                                    </div>
                                    <div className="wrap-bt-next-section-step">
                                        {
                                            this.state.pitchdeck ? 
                                            <input onClick={() => this.handleSubmitPitchdeck()} type="submit" defaultValue="Next" className="bt-next-step-up-pitchdeck-curation" data-dismiss="modal" data-toggle="modal" data-target="#modalcurationprocess" data-backdrop="static" data-keyboard="false" />
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

    renderDone = () => {
        return (
            <>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.state.show} 
                    onHide={() => this.setState({show : false})}
                >
                    <Modal.Body>
                        
                        <div className="modal-content">
                            <div className="bt-close-popup-pitch" data-dismiss="modal">
                                <i className="fa fa-close" />
                            </div>
                            <div className="modal-body">
                                {/* pitching proses */}
                                <div className="wrap-pitching-process-modal">
                                    <div className="sec-process-column-pitching sec-process-column-pitching-choose">
                                        <div className="col-lg-6-item-pro">
                                            <div className="step-pitching-process">
                                                <div className="step-pitching-process-number">1</div>
                                                <div className="step-pitching-process-text">Choose Pitchdeck</div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6-item-pro">
                                            <div className="step-pitching-process step-pitching-process-active">
                                                <div className="step-pitching-process-number">2</div>
                                                <div className="step-pitching-process-text">Curation Process</div>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap-curation-process-pop">
                                        <div className="checklist-curation-process-accept">
                                            <i className="fa fa-check" />
                                        </div>
                                        <h3 className="title--curation-process-info1">Your application has been accepted!</h3>
                                        <h4 className="title--curation-process-info2">Hi, we're checking your application &amp; will get back to you as soon as there is a fit.</h4></div>
                                        <div className="wrap-bt-next-section-step2">
                                            <a onClick={ () => { this.setState({ modal : 1 }) }} href="javascript:void(0)" className="bt-next-step-pitching-process-cta" data-dismiss="modal" data-backdrop="static" data-keyboard="false">Finish</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>

        )
    }

    render(){
        const {date, label, portofolioLogo, teams, news, name, file, body} = this.state.pitch
        if(this.props.user.Auth.email !== ''){
            return (
                <div>
                    {/* menu bar left */}
                    <Sidebar />
                    {/* menu bar top */}
                    <MenubarTop />
                    {/* content platform */}
                    <div className={this.state.subMenuBar ? "wrap-all-content-pla tform wrap-all-content-platform-active" : "wrap-all-content-platform"}>
                        <div className="all-wrap-content-in-platform-sec">
                            <div className="wrap-pitch-detail-sec-platform">
                                <div className="wrap-pitch-detail-info-dir">
                                {/* row */}
                                <div className="pitch-detail-info-dir">
                                    <div className="pitch-detail-info-img-about">
                                        <div className="pitch-detail-info-img-about-img">
                                            <img src={`${process.env.REACT_APP_URL}${file}`} alt />
                                        </div>
                                        <div className="pitch-detail-info-img-about-info">
                                            <div className="icon-info-alt tptip" data-toggle="tooltip" data-placement="top" title="6 months membership of our PitchUp platform">
                                            i
                                            </div>
                                            <h3 className="title-pitch-detail-info-head">
                                            {name}
                                            </h3>
                                            <h4  className="title-pitch-detail-info-text">
                                                {ReactHtmlParser(body)}
                                            </h4>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                    <div className="wrap-tags-pitch-detail">
                                        {
                                            label ? 
                                            label.map((item) => {
                                                return (
                                                    <a href="#">{item}</a>
                                                )
                                            }) : null
                                        }
                                    </div>
                                    <div className="wrap-cta-button-req-pitch-follow">
                                        <a href="javascript:void(0)" className="bt-cta-detail-pitch-follow">
                                            <i className="fa fa-plus" /> Follow
                                        </a>
                                    <div className="followed-button-y">Followed</div>
                                        <a onClick={() => this.setState({show : true})} className="bt-cta-detail-pitch-request" data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#modalrequestpitch">
                                            Request Pitch
                                        </a>
                                        {
                                            this.renderPitchdeck()
                                        }
                                            {/* this.state.modal == 1 ? this.renderPitchdeck()
                                                : this.state.modal == 2 ? this.renderDone()
                                                : null */}
                                    </div>
                                </div>
                                <div className="row-pitch-2-col-sec-dir">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="row-pitch-2-col-sec-dir-left">
                                                {/* lates news */}
                                                <div className="wrap-lates-news-pitch-single">
                                                    <h3 className="title-platform-sec-c2">
                                                        GDP Venture Latest News
                                                    </h3>
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
                                                                <a href={item.companyUrl} target="_blank">{item.title}</a>
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
                                                {/* portfolio */}
                                                <div className="wrap-portfolio-pitch-img-logo">
                                                    <h3 className="title-platform-sec-c2">
                                                    Portfolio
                                                    </h3>
                                                    <div className="wrap-i-potfolio-pitch-single-p">
                                                    {/* item */}
                                                    {
                                                        portofolioLogo ? 
                                                        portofolioLogo.map((item) => {
                                                            return (
                                                                <div className="item-portfolio-logo-pitch-single">
                                                                    <div className="item-portfolio-logo-pitch-single-in">
                                                                        <a href="#">
                                                                            <img src={`${process.env.REACT_APP_URL}${item}`} alt />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }) : null
                                                    }
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="wrap-box-team-behind-pitch-dir">
                                            <h3 className="title-team-behind-pitch">
                                                Team behind GDP Venture
                                            </h3>
                                            <div className="wrap-list-item-team-behind">
                                                {/* item */}
                                                {
                                                    teams ? 
                                                    teams.map((item) => {
                                                        return (
                                                            <div className="item-list-team-behind">
                                                                <div className="item-list-team-behind-ava">
                                                                    <img src={`${process.env.REACT_APP_URL}${item.profilePhoto}`} alt />
                                                                </div>
                                                                <div className="item-list-team-behind-info">
                                                                    <h4 className="title-name-team-behind">
                                                                        {item.name}
                                                                    </h4>
                                                                    <h4 className="title-name-team-behind2">
                                                                        {item.title}
                                                                    </h4>
                                                                    <a target="_blank" href={item.linkedinUrl} className="linkendin-icon-link">
                                                                        <i className="fa fa-linkedin" />
                                                                    </a>
                                                                </div>
                                                                <div className="clear" />
                                                            </div>
                                                        )
                                                    }) : null
                                                }
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
        } else {
            return <Redirect to="/" />
        }
    }
}

const mapStateToProps = state => {
    return {
      user : state
    }
  }

export default connect(mapStateToProps, null)(Dashboard_Pitch)