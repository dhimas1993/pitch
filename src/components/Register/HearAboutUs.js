import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
import axios from 'axios'
import $ from 'jquery';
import Navigationbar from './Parts/NavigationInfo'
import LogoUpload from '../../assets/images/iconup.png';

function HearAboutUs (){
    const [Choose, setChoose] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const id = useSelector(state => state.Auth._id)
    const handleChoose = (e) => {
        setChoose(e.target.value)
    }

    const handleSubmit = async () => {
        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/hearAboutUs`, {
            id,
            hearAboutUs: Choose
        }).then((res) => {
            setRedirect(true)
            console.log(res.data)
        }).catch((err) => {
            alert(err.message)
        })
    }

    console.log(id)
    return (
        <div>
            {redirect ? <Redirect to="/CheckoutPage" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation2"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            How did you hear about us ?
                        </h2>
                        <div className="f-regist1">
                            <div className="select-radio-form-pi">
                                {/* <!-- item --> */}
                                <div className="item-select-radio-f-pi">
                                    <div className="i-select-radio-pi">
                                        <label className="containerck">
                                            <input value="Instagram Post" onChange={handleChoose}  type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="i-select-radio-text">
                                        <h3 className="text-s-radio-reg">
                                            Instagram Post
                                        </h3>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-select-radio-f-pi">
                                    <div className="i-select-radio-pi">
                                        <label className="containerck">
                                            <input value="Word of Mouth" onChange={handleChoose} type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="i-select-radio-text">
                                        <h3 className="text-s-radio-reg">
                                            Word of Mouth
                                        </h3>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-select-radio-f-pi">
                                    <div className="i-select-radio-pi">
                                        <label className="containerck">
                                            <input value="Online News" onChange={handleChoose} type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="i-select-radio-text">
                                        <h3 className="text-s-radio-reg">
                                            Online News
                                        </h3>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-select-radio-f-pi">
                                    <div className="i-select-radio-pi">
                                        <label className="containerck">
                                            <input value="Linkedin" onChange={handleChoose} type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="i-select-radio-text">
                                        <h3 className="text-s-radio-reg">
                                            LinkedIn
                                        </h3>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-select-radio-f-pi">
                                    <div className="i-select-radio-pi">
                                        <label className="containerck">
                                            <input value="Direct Sales" onChange={handleChoose} type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="i-select-radio-text">
                                        <h3 className="text-s-radio-reg">
                                            Direct Sales
                                        </h3>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-select-radio-f-pi">
                                    <div className="i-select-radio-pi">
                                        <label className="containerck">
                                            <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="i-select-radio-text">
                                        <div className="input-f-regst-cus">
                                            <input onChange={handleChoose} type="text" className="i-f-regist1" placeholder="Other"/>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <br/>
                                {/* <!-- item --> */}
                                <div className="item-input-f-regist1">
                                    <div className="input-f-regst-c2">
                                        <input onClick={() => {handleSubmit()}} type="submit" value="Next" className="bt-next-submit-reg"/>
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
export default HearAboutUs