import React from 'react'
import { Link } from 'react-router-dom';
import background from '../../assets/images/bglogin.png'
import logo from '../../assets/images/logo.png'

export default function Partloginforgot() {
    return (
        <div>
            <div className="bg-login-page">
                <img src={background} alt=""/>
            </div>
            <div className="logo-pitchup-log">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="dont-have-account">
                <h3 className="title-donthaveaccount">Don't have account ? </h3>
                <Link to="/Signup" className="bt-signup-log">Signup</Link>
            </div>
        </div>
    )
}
