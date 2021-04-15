import React, { Component } from 'react';
import Bgpage from '../../assets/images/bgpage2.png'

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
                                    Don't go alone, <br/>Hack your growth with <br/><span>Mentors</span>
                                </h1>
                                <h3 className="heading-text-ban-info">
                                    From finding investor leads to pitch to Top Investor, <br/>boost your chance to raise capital.
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