import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CardDetail from '../dashboard/cardDetail'
import axios from 'axios'
import $ from 'jquery';
import MenubarTop from '../dashboard/menubarTop'
import { connect } from 'react-redux'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Loading from '../../../utils/loading'
import Alert from '../../../utils/alert'

import imgvid from '../../../assets/images/imgvid.png'

class Dashboard_Pitch extends Component{
    constructor() {
        super();
        this.state = {
            subMenuBar : false,
            menuProfile : false,
            tab: 1,
            recommended: '',
            pitch: '',
            searchBar: true
        };
    }

    componentDidMount() {
        this.getRecommended()
        this.getPitch()
    }

    getRecommended = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/recommended/`,)
        .then(res => {
            this.setState({recommended : res.data.data})
        })
    }

    getPitch = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/pitch/`,)
        .then(res => {
            this.setState({pitch : res.data.data})
        })
    }

    render(){
        if(this.props.user.Auth.email !== ''){
            return (
                <div>
                    
                    {/* Sidebar */}
                    <Sidebar {...this.props}/>
                    {/* menu bar top */}
                    <MenubarTop {...this.state}/>
                    {/* content platform */}
                    <div className={this.state.subMenuBar ? "wrap-all-content-platform wrap-all-content-platform-active" : "wrap-all-content-platform"}>
                        <div className="all-wrap-content-in-platform-sec">
                            <div className="wrap-pitch-sec-platform">
                                {/* section recomended */}
                                <div className="wrap-pitch-sec-recomended">
                                    <h3 className="title-head-sec-rec">
                                        Recommended for you
                                    </h3>
                                    <div className="wrap-item-pitch-rec-c">
                                        {
                                            this.state.recommended ? 
                                            this.state.recommended.map((item) => {
                                                return (
                                                    <CardDetail item={item} />
                                                )
                                            }) : <Loading />
                                        }
                                        
                                    </div>
                                </div>
                                {/* section recomended */}
                                <div className="wrap-pitch-sec-recomended">
                                    <h3 className="title-head-sec-rec">
                                        Directory
                                    </h3>
                                    <div className="wrap-item-pitch-rec-c">
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
                            {/* Search bar */}
                            <div className={this.state.searchBar === true ? "wrap-search-box-filter wrap-search-box-filter-active" : "wrap-search-box-filter"}>
                                <div className="bt-wrap-bt-search-filter-show-hide">
                                    <i onClick={() => {this.setState({searchBar : !this.state.searchBar})}} className="fa fa-search bts-filter-show" />
                                    <i onClick={() => {this.setState({searchBar : !this.state.searchBar})}} className="fa fa-close bts-filter-hide" style={{display: 'none'}} />
                                </div>
                                <div className="in-search-box-filter">
                                    <h3 className="search-filter-heading-title">
                                        Search Filter
                                    </h3>
                                    <div className="wrap-item-search-fiter">
                                        <div className="item-input-search-form">
                                            <input type="text" placeholder="East Venture, Alpha JWC , Sequoia" />
                                        </div>
                                    </div>
                                    <div className="wrap-item-search-fiter">
                                        <h3 className="title-sub-item-search-f">
                                            Investments at this funding stage
                                        </h3>
                                        <div className="wrap-item-check-searc-filter">
                                            {/* item */}
                                            <div className="item-checkbox-s-filter">
                                                <label className="containerbx">
                                                    <input type="checkbox" />
                                                    <span className="checkmarkbx" />
                                                </label>
                                                <span className="check-item-text">Pre-Seed</span>
                                                <div className="clear" />
                                            </div>
                                            {/* item */}
                                            <div className="item-checkbox-s-filter">
                                                <label className="containerbx">
                                                    <input type="checkbox" />
                                                    <span className="checkmarkbx" />
                                                </label>
                                                <span className="check-item-text">Seed</span>
                                                <div className="clear" />
                                            </div>
                                            {/* item */}
                                            <div className="item-checkbox-s-filter">
                                                <label className="containerbx">
                                                    <input type="checkbox" />
                                                    <span className="checkmarkbx" />
                                                </label>
                                                <span className="check-item-text">Series A</span>
                                                <div className="clear" />
                                            </div>
                                            {/* item */}
                                                <div className="item-checkbox-s-filter">
                                                <label className="containerbx">
                                                    <input type="checkbox" />
                                                    <span className="checkmarkbx" />
                                                </label>
                                                <span className="check-item-text">Series B</span>
                                                <div className="clear" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wrap-item-search-fiter">
                                        <h3 className="title-sub-item-search-f">
                                            Industry
                                        </h3>
                                        <div className="item-input-search-form">
                                            <input type="text" placeholder="E.g SaaS,  Ecommerce, Agritech" />
                                        </div>
                                    </div>
                                    <div className="wrap-item-search-fiter">
                                        <h3 className="title-sub-item-search-f">Number of Portfolio Organization</h3>
                                    <div className="wrap-number-search-filter">
                                        <div className="item-s-filter-numb">
                                            <input type="text" placeholder="Enter Number" className="i-s-filter-numb" />
                                        </div>
                                        <div className="item-s-filter-numb">
                                            <span className="seperator-filter-n">-</span>
                                        </div>
                                        <div className="item-s-filter-numb">
                                            <input type="text" placeholder="Enter Number" className="i-s-filter-numb" />
                                        </div>
                                    </div>
                                    </div>
                                    <input onClick={() => Alert('SOON')} type="submit" className="bt-apply-filter" defaultValue="Apply Filter" />
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