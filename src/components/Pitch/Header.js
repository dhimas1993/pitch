import React, { Component } from 'react';
import Bgpage from '../../assets/images/bgp6.png'
import { Link } from 'react-router-dom';

class Header extends Component{
    componentDidMount() {

    }
    render(){
        return (
            <div>
                <div className="wrap-heading-section-page-6">
                    <img src={Bgpage} alt=""/>
                    <div className="sec-header-page6">
                        <div className="sec-header-page6-in">
                            <div className="heading-page-6-title">
                                <h2 className="title-heading-page-6-1">priority <br/> package</h2>
                                <h3 className="title-heading-page-6-2">One stop solution for Startup Founders</h3>
                                <div className="cta-page-6-head">
                                    <Link to="#" className="bt-cta-page-6-get-plan">Get Plan</Link>
                                    <span className="note-get-plan-text">starts from IDR 1 mio / month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header