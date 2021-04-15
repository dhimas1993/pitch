import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Headerlog from '../../components/Login/Partloginforgot';

class Forgotpassword extends Component{
    componentDidMount() {
    }
    render(){
        
        return (
            <div>
                <Headerlog></Headerlog>
                <div className="wrap-login-page">
                    <div className="wrap-login-page-in">
                        <div className="box-login-form">
                            <div className="heading-title-login-form">
                                Can't Log in?
                            </div>
                            <div className="in-box-login-form">
                                {/* <!-- fullname --> */}
                                <div class="item-form-login-i">
                                    <h4 className="form-input-login-desc">We'll send a recovery email to</h4>
                                    <div className="i-input-form-login iemail">
                                        <input type="text" placeholder="Enter Email"/>
                                    </div>
                                </div>
                                <br/>
                                {/* <!-- login --> */}
                                <div className="item-form-login-i">
                                    <input type="submit" value="Send Recovery Link" className="submit-login-f"/>
                                </div>
                                <div className="link-return-login">
                                    <Link to="/Login">Return to log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Forgotpassword