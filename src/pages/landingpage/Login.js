import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux'
import { loginUser } from '../../store/action/login'

import Headerlog from '../../components/Login/Partloginforgot';
import logogoogle from '../../assets/images/google.jpg'
import iconpitch from '../../assets/images/iconpitch.png'

class Login extends Component{
    constructor(props) {
        super(props);    
        this.state = { 
            
        };
      }

    componentDidMount() {
        $(".show-password, .hide-password").on('click', function() {
		    var passwordId = $(".ipassword input");
		    if ($(this).hasClass('show-password')) {
		      $(passwordId).attr("type", "text");
		      $(this).parent().find(".show-password").hide();
		      $(this).parent().find(".hide-password").show();
		    } else {
		      $(passwordId).attr("type", "password");
		      $(this).parent().find(".hide-password").hide();
		      $(this).parent().find(".show-password").show();
            }
		});
    }

    // action to redux
    login = () => {
        this.props.loginUser({
            email : this.email.value,
            password : this.password.value
        })
    }
 
    render(){
        // console.log('login', this.props.user.Auth)
        if(this.props.user.Auth.email !== ''){
            return <Redirect to='/dashboard'/>
        } else {
            return (
                <div>
                    <Headerlog></Headerlog>
                    <div className="wrap-login-page">
                        <div className="wrap-login-page-in">
                            <div className="box-login-form">
                                <div className="heading-title-login-form">
                                    Login to <img src={iconpitch} alt=""/>
                                </div>
                                <div className="in-box-login-form">
                                    {/* email */}
                                    <div className="item-form-login-i">
                                        <h4 className="form-input-login-desc">Email <span>*</span></h4>
                                        <div className="i-input-form-login iemail">
                                            <input type="text" placeholder="Enter Email" ref={(email) => {this.email = email}}/>
                                        </div>
                                    </div>
                                    {/* password */}
                                    <div className="item-form-login-i">
                                        <h4 className="form-input-login-desc">Choose Password <span>*</span></h4>
                                        <div className="i-input-form-login ipassword">
                                            <input type="password" placeholder="Enter Password" ref={(password) => {this.password = password}} />
                                            <div className="bt-show-password-c">
                                                <span className="show-password">Show</span>
                                                <span className="hide-password">Hide</span>
                                            </div>
                                        </div>
                                        <div className="cta-forgot-password">
                                            <Link to="/Forgotpassword">Forgot Password ?</Link>
                                        </div>
                                    </div>
                                    {/* login button */}
                                    <div className="item-form-login-i">
                                        <input onClick={() => this.login()} type="submit" value="Login" className="submit-login-f"/>
                                    </div>
                                    <div className="item-form-login-i">
                                        <h3 className="text-or">OR</h3>
                                    </div>
                                    <div className="item-form-login-i">
                                        <Link to="/" className="bt-login-with-google"><img src={logogoogle} alt=""/> Continue with Google</Link>
                                    </div>
                                    <div className="item-form-login-i">
                                        <h3 className="text-cant-login">
                                            <Link to="/Forgotpassword">Can't Login?</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      user : state
    }
}

export default  connect(mapStateToProps, {loginUser})(Login)