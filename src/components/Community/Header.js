import React, { Component } from 'react';
import Bgpage from '../../assets/images/bgpage5.png'

class Header extends Component{
    componentDidMount() {

    }
    render(){
        return (
            <div>
                <div className="wrap-main-header-ban wrap-main-header-ban-custom1">
                    <div className="bg-head-img">
                        <img src={Bgpage} alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="main-header-ban-left main-header-ban-left-cus-1">
                                <h1 className="heading-text-ban-left">
                                Join our slack <br/>community for Founders
                                </h1>
                                <h3 className="heading-text-ban-info">
                                All in one place for founders to connect, learn, and get updated with fundraise.
                                </h3>
                                <form action="#">
                                    <div className="form-email-header-ban">
                                        <input type="text" placeholder="Enter your email address"/>
                                    </div>
                                    <input type="submit" value="Get Started" className="bt-submit-email-address"/>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header