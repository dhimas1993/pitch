import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconPitch from '../../assets/images/iconpitch.png'
import Icon1 from '../../assets/images/iconwel.png'
import Icon2 from '../../assets/images/iconwell.png'

class HomeSection extends Component{
    render(){
        return (
            <div>
                <div className="wrap-page-regist-platform">
                    <div className="page-regist-welcome-left">
                        <div className="page-regist-welcome-left-in">
                            <div className="page-regist-welcome-info">
                                <h3 className="title-welcome-regist-1">
                                    <img src={Icon1} alt=""/> Welcome, Tony Phangjaya
                                </h3>
                                <h3 className="title-welcome-regist-2">
                                    You can now <b>manage all your dealflow</b> within our <b>Pitch <span>Up</span></b> platform.
                                </h3>
                                <h3 className="title-welcome-regist-2">
                                    We are eager to help you grow. Start by <b>filling out this form</b> so that we can know you better 
                                </h3>
                                <Link to="/CompanyInformation1" className="bt-ge-started-welcome-regist">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="page-regist-welcome-right">
                        <div className="page-regist-welcome-right-in">
                            <div className="regist-welcome-icon-right">
                                <div className="logo-pitchup-welcome">
                                    <img src={IconPitch} alt=""/>
                                </div>
                                <div className="img-welcome-regist">
                                    <img src={Icon2} alt=""/>
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
export default HomeSection