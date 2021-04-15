import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';

import Headerlog from '../../components/Login/Partloginforgot';
import logogoogle from '../../assets/images/google.jpg'

class Login extends Component{
    state = {
        regis : false
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

    handleSignUp =  () => {
        const firstName = this.firstName.value
        const email = this.email.value
        const password = this.password.value
        
        if(firstName !== '' && email !== '' && password !== ''){
            let data = {
                firstName : firstName,
                email: email,
                password: password
            }
            
            axios.post(`${process.env.REACT_APP_BASE_URL}/users/register/`,
                data
            ).then((res) => {
                console.log("SUCCESS")
                this.setState({regis: true})
            }).catch((error) => {
                console.log(error.message)
            })
        } else {
            alert("mohon lengkapi field dengan benar")
        }
    }

    render(){
        if(this.state.regis){
            return <Redirect to="/login" />
        } else {
            return (
                <div>
                    <Headerlog></Headerlog>
                    <div className="wrap-login-page">
                        <div className="wrap-login-page-in">
                            <div className="box-login-form">
                                <div className="heading-title-login-form">
                                    Sign Up Now
                                </div>
                                <div className="in-box-login-form">
                                    {/* <!-- fullname --> */}
                                    <div className="item-form-login-i">
                                        <h4 className="form-input-login-desc">Name <span>*</span></h4>
                                        <div className="i-input-form-login iuser">
                                            <input type="text" placeholder="Insert Full Name" ref={(firstName) => {this.firstName = firstName}}/>
                                        </div>
                                    </div>
                                    {/* <!-- email --> */}
                                    <div className="item-form-login-i">
                                        <h4 className="form-input-login-desc">Email <span>*</span></h4>
                                        <div className="i-input-form-login iemail">
                                            <input type="text" placeholder="Insert Email" ref={(email) => {this.email = email}}/>
                                        </div>
                                    </div>
                                    {/* <!-- password --> */}
                                    <div className="item-form-login-i">
                                        <h4 className="form-input-login-desc">Choose Password <span>*</span></h4>
                                        <div className="i-input-form-login ipassword">
                                            <input type="password" placeholder="Insert Password" ref={(password) => {this.password = password}}/>
                                            <div className="bt-show-password-c">
                                                <span className="show-password">Show</span>
                                                <span className="hide-password">Hide</span>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    {/* <!-- submit --> */}
                                    <div className="item-form-login-i">
                                        <input onClick={() => {this.handleSignUp()}} type="submit" value="Sign Up Now" className="submit-login-f"/>
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
export default Login