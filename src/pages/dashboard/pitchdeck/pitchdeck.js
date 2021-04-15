import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import $ from 'jquery';
import MenubarTop from '../dashboard/menubarTop'
import Sidebar from '../../../components/Sidebar/Sidebar';
import PitchdeckItem from './pitchdeckItem'
import MockupItem from './mockupItem'
import Loading from '../../../utils/loading'

import imgvid from '../../../assets/images/imgvid.png'
import addPitch from '../../../assets/images/icon-add-pitchdeck-i.png'
import pdf from '../../../assets/images/pdf.png'

class Dashboard_Pitchdeck extends Component{
    constructor() {
        super();
        this.state = {
            subMenuBar : false,
            menuProfile : false,
            tab: 1,
            pdf: '',
            pdfName : '',
            mockup: '',
            mockupImg: '',
            redirect: false,
            pitchdeck: null, 
            user: ''
        };
    }

    componentDidMount() {
        this.getPitchdeck()
        this.getUser()
    }

    componentDidUpdate(prevProps, prevState) {
        //Typical usage, don't forget to compare the props
        // console.log(prevState.pitchdeck)
        if(prevState.pitchdeck == null){
            this.getPitchdeck()
        }
    }
    
    
    onChangePdf = async (e) => {
        if (e.target.files[0]) {
            // console.log("pdf: ", e.target.files);
            this.setState({ pdf : e.target.files[0]});
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                this.setState({pdfName : reader.result});
            });
            reader.readAsDataURL(e.target.files[0]);

            const id = this.props.user.Auth._id
            const pdf = e.target.files[0]

            let data = new FormData();
            data.append("id", id)
            data.append("image", pdf)

            const POST = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/uploadPitchdeck`, 
                data
            ).then((res) => {
                console.log('success', res.data)
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    };

    onChangeImage = async (e) => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            this.setState({mockup : e.target.files[0]})
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                this.setState({mockupImg : reader.result})
            });
            reader.readAsDataURL(e.target.files[0]);
        }

        const id = this.props.user.Auth._id
        const img = e.target.files[0]

        let data = new FormData()
        data.append('id', id)
        data.append('image', img)

        await axios.post(`${process.env.REACT_APP_BASE_URL}/users/uploadMockup`, 
            data
        ).then((res) => {
            console.log('success')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }

    getPitchdeck = async () => {
        const id = this.props.user.Auth._id
        const pitchdeck = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/pitchdeckByUserId`,{
            id
        })
        if(pitchdeck !== null){
            this.setState({ pitchdeck : pitchdeck.data })
        } 
    }

    getUser = async () => {
        const id = this.props.user.Auth._id
        const user = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/getuser`,{
            id
        }).then(res => {
            this.setState({user : res.data})
        }).catch(err => {
            console.log(err.message)
        })
           
    }

    render(){
        if(this.props.user.Auth.email !== ''){
            if(this.state.redirect === false){
                return (
                    <div>
                        {/* menu bar left */}
                        <Sidebar {...this.props}/>
                        {/* menu bar top */}
                        <MenubarTop {...this.state}/>
                        {/* content platform */}
                        <div className={this.state.subMenuBar ? "wrap-all-content-platform wrap-all-content-platform-active" : "wrap-all-content-platform"}>
                        {/* slider dashboard */}
                        <div className="all-wrap-content-in-platform-sec">
                            <div className="wrap-pitchdeck-sec-platform">
                                <div className="bar-menu-tab-pitchdeck-p">
                                    <ul className="i-bar-menu-tab-pitchdeck-p">
                                        <li onClick={() => {this.setState({tab : 1})}} data-mtab="tbpitchdeck" className={this.state.tab == 1 ? "active bt-pitchdeck-menu-tab" : "bt-pitchdeck-menu-tab"}>Pitch Deck</li>
                                        <li onClick={() => {this.setState({tab : 2})}} data-mtab="tbuimockup" className={this.state.tab == 2 ? "active bt-pitchdeck-menu-tab" : "bt-pitchdeck-menu-tab"}>UI/UX Mockup</li>
                                        <li onClick={() => {this.setState({tab : 3})}} data-mtab="tbelevatorpitch" className={this.state.tab == 3 ? "active bt-pitchdeck-menu-tab" : "bt-pitchdeck-menu-tab"}>Elevator Pitch</li>
                                    </ul>
                                </div>
                                {/* section recomended */}
                                <div className="wrap-pitchdeck-file-c">
                                    {/* item */}
                                    <div className={this.state.tab == 1 ? "item-tab-pitchdeck-content item-tab-pitchdeck-content-active" : "item-tab-pitchdeck-content"} id="tbpitchdeck">
                                        <div className="wrap-box-pitchdeck-file-s">
                                            {/* item */}
                                            <div className="item-box-pitchdeck-upload-file">
                                                <div className="item-box-pitchdeck-upload-file-in">
                                                    <form action="#" id="form-val2">
                                                        <div className="item-box-pitchdeck-upload-file-content">
                                                            <div className="item-box-pitchdeck-upload-file-content-in">
                                                                <div className="fileUpload">
                                                                    <input onChange={(e) => {this.onChangePdf(e)}} type="file" name="doc1" className="upload uploadBtn uploadBtn1" accept=".pdf,.PDF"/>
                                                                </div>
                                                                <div className="custom-val-lg">
                                                                    <div className="icon-add-file-pitchdeck">
                                                                        <img src={addPitch} alt="" />
                                                                    </div>
                                                                    <span className="file-upload-logo-info1" id="file-upload-logo-infoup1" />
                                                                        <span className="hide-when-active1 hide-when-activeup1">
                                                                            Upload File
                                                                        </span>
                                                                        <span className="file-req-up-logo">
                                                                            {this.state.pdf.name}
                                                                        </span>
                                                                    <label htmlFor="filepitchdeck" generated="true" className="error custom-f-regist" />
                                                                </div>
                                                                <div className="clear" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* item */}
                                            {
                                                this.state.pitchdeck !== null ? 
                                                this.state.pitchdeck.map((item) => {
                                                    return (
                                                        <PitchdeckItem item={item}/>
                                                    )
                                                }) : <Loading />
                                            }
                                        </div>				
                                    </div>
                                    {/* item */}
                                    <div className={this.state.tab == 2 ? "item-tab-pitchdeck-content item-tab-pitchdeck-content-active" : "item-tab-pitchdeck-content"} id="tbuimockup">
                                        <div className="wrap-box-pitchdeck-file-s">
                                            {/* item */}
                                            <div className="item-box-pitchdeck-upload-file">
                                                <div className="item-box-pitchdeck-upload-file-in">
                                                    <div className="item-box-pitchdeck-upload-file-content">
                                                        <div className="item-box-pitchdeck-upload-file-content-in">
                                                            <div className="fileUpload">
                                                                <input onChange={(e) => {this.onChangeImage(e)}} type="file" name="mockup" className="upload uploadBtn uploadBtn2" accept=".png,.PNG,.jpg,.JPG,.jpeg,.JPEG" />
                                                            </div>
                                                            <div className="custom-val-lg">
                                                                <div className="icon-add-file-pitchdeck">
                                                                    <img src={this.state.mockupImg ? this.state.mockupImg : addPitch} alt="" />
                                                                </div>
                                                                    <span className="file-upload-logo-info1" id="file-upload-logo-infoup2" />
                                                                    <span className="hide-when-active1 hide-when-activeup2">
                                                                    Upload File
                                                                </span>
                                                                <label htmlFor="mockup" generated="true" className="error custom-f-regist" />
                                                            </div>
                                                            <div className="clear" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            {/* {
                                                this.state.user.mockup !== null ? 
                                                this.state.user.mockup.map((item) => {
                                                    return (
                                                        <MockupItem item={item}/>
                                                    )
                                                }) : <Loading />
                                            } */}
                                        </div>		
                                    </div>
                                    {/* item */}
                                    <div className={this.state.tab == 3 ? "item-tab-pitchdeck-content item-tab-pitchdeck-content-active" : "item-tab-pitchdeck-content"} id="tbelevatorpitch">
                                        <div className="wrap-box-pitchdeck-file-s">
                                            sad
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  );
            } else {
                return <Redirect to="/Dashboard-Pitchdeck" />
            }
        } else {
            return <Redirect to='/'/>
        }
    }
}

const mapStateToProps = state => {
    return {
      user : state
    }
  }

export default connect(mapStateToProps, null)(Dashboard_Pitchdeck)