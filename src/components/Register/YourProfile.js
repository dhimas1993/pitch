import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Navigationbar from './Parts/NavigationInfo'

function YourProfile (){
    const [firstName, setfirstName] = useState(null)
    const [lastName, setlastName] = useState(null)
    const [linkedinProfile, setlinkedinProfile] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const id = useSelector(state => state.Auth._id)

    const handleClick = async () => {
        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/yourProfile`, {
            id,
            firstName,
            lastName,
            linkedinProfile
        }).then((res) =>{
            console.log(res.data)
            setRedirect(true)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
            {redirect ? <Redirect to="/PersonalInformation2" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation2"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            Your Profile
                        </h2>
                        <div className="f-regist1">
                            <div className="wrap-input-f-regist1">
                                <Row>
                                    <Col lg={6}>
                                        {/* <!-- item --> */}
                                        <div className="item-input-f-regist1">
                                            <h4 className="title-input-name-regist1">First Name</h4>
                                            <div className="input-f-regst-c">
                                                <input onChange={e => setfirstName(e.target.value)} type="text" className="i-f-regist1"/>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        {/* <!-- item --> */}
                                        <div className="item-input-f-regist1">
                                            <h4 className="title-input-name-regist1">Last Name</h4>
                                            <div className="input-f-regst-c">
                                                <input onChange={e => setlastName(e.target.value)} type="text" className="i-f-regist1"/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                {/* <!-- item --> */}
                                <div className="item-input-f-regist1">
                                    <h4 className="title-input-name-regist1">LinkedIn Profile</h4>
                                    <div className="input-f-regst-c">
                                        <input onChange={e => setlinkedinProfile(e.target.value)} type="text" className="i-f-regist1"/>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-input-f-regist1">
                                    <div className="input-f-regst-c2">
                                        <input onClick={() => {handleClick()}} type="submit" value="Next" className="bt-next-submit-reg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YourProfile