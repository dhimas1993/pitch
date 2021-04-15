import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import iconpitch from '../../assets/images/iconpitch.png';
import getstartedicon from '../../assets/images/getstartedicon.png';

class GetStarted extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <Link to="/CheckoutPage" className="bt-nav-regist-prev-last">
                    <i className="fa fa-angle-left"></i>
                </Link>
                <div className="wrap-page-regist-platform">
                    <div className="page-regist-welcome-left">
                        <div className="page-regist-welcome-left-in">
                            <div className="page-regist-welcome-info">
                                <h3 className="title-welcome-regist-2">
                                    <b>You're ready to get started!</b>
                                </h3>
                                <Link href="#" className="bt-ge-started-welcome-regist">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="page-regist-welcome-right">
                        <div className="page-regist-welcome-right-in">
                            <div className="regist-welcome-icon-right">
                                <div className="logo-pitchup-welcome">
                                    <img src={iconpitch} alt=""/>
                                </div>
                                <div className="img-welcome-regist">
                                    <img src={getstartedicon} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}
export default GetStarted