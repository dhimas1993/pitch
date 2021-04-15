import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux'
import axios from 'axios'

import Navigationbar from './Parts/NavigationInfo'
import Imglogo1 from '../../assets/images/icf1.png';
import Imglogo1a from '../../assets/images/icfa1.png';
import Imglogo2 from '../../assets/images/icf2.png';
import Imglogo2a from '../../assets/images/icfa2.png';
import Imglogo3 from '../../assets/images/icf3.png';
import Imglogo3a from '../../assets/images/icfa3.png';
import Imglogo4 from '../../assets/images/icf4.png';
import Imglogo4a from '../../assets/images/icfa4.png';
import Imglogo5 from '../../assets/images/icf5.png';
import Imglogo5a from '../../assets/images/icfa5.png';

function StageOfYourStartup (){
    const [Choose, setChoose] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const _id = useSelector(state => state.Auth._id)

    const handleAddrTypeChange = (e) => {
        // console.log(_id,e.target.value)
        setChoose(e.target.value)
    }

    const handleClick = async () => {
        const id = _id
        const stage = Choose
        // console.log(id, id_category)
        await axios.put(`${process.env.REACT_APP_BASE_URL}/users/registerStage`,{
            id,
            stage
        }).then((res) => {
            setRedirect(true)
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div>
            {redirect ? <Redirect to="/CompanyInformation5" /> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation1"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            What is the stage of your startup
                        </h2>
                        <div className="f-regist1">
                            <div className="box-select-stage-regist">
                                {/* <!-- item --> */}
                                <div className="item-box-select-stage">
                                    <input onChange={handleAddrTypeChange} value="Ideation / Concept Only" type="radio" className="checkbox-sel-stage-c" name="stage-startup"/>
                                    <div className="item-box-select-stage-box">
                                        <div className="img-icon-sel-stage">
                                            <img src={Imglogo1} alt=""/>
                                            <img src={Imglogo1a} alt="" className="iconstage-active"/>
                                        </div>
                                        <h4 className="title-sel-stage">Ideation / Concept Only</h4>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-box-select-stage">
                                    <input onChange={handleAddrTypeChange} value="Prototype Ready" type="radio" className="checkbox-sel-stage-c" name="stage-startup"/>
                                    <div className="item-box-select-stage-box">
                                        <div className="img-icon-sel-stage">
                                            <img src={Imglogo2} alt=""/>
                                            <img src={Imglogo2a} alt="" className="iconstage-active"/>
                                        </div>
                                        <h4 className="title-sel-stage">Prototype Ready</h4>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-box-select-stage">
                                    <input onChange={handleAddrTypeChange} value="Launch with no revenue" type="radio" className="checkbox-sel-stage-c" name="stage-startup"/>
                                    <div className="item-box-select-stage-box">
                                        <div className="img-icon-sel-stage">
                                            <img src={Imglogo3} alt=""/>
                                            <img src={Imglogo3a} alt="" className="iconstage-active"/>
                                        </div>
                                        <h4 className="title-sel-stage">Launch with <br/>no revenue</h4>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-box-select-stage">
                                    <input onChange={handleAddrTypeChange} value="Prototype Ready" type="radio" className="checkbox-sel-stage-c" name="stage-startup"/>
                                    <div className="item-box-select-stage-box">
                                        <div className="img-icon-sel-stage">
                                            <img src={Imglogo4} alt=""/>
                                            <img src={Imglogo4a} alt="" className="iconstage-active"/>
                                        </div>
                                        <h4 className="title-sel-stage">Prototype Ready</h4>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-box-select-stage">
                                    <input onChange={handleAddrTypeChange} value="Launch with no revenue" type="radio" className="checkbox-sel-stage-c" name="stage-startup"/>
                                    <div className="item-box-select-stage-box">
                                        <div className="img-icon-sel-stage">
                                            <img src={Imglogo5} alt=""/>
                                            <img src={Imglogo5a} alt="" className="iconstage-active"/>
                                        </div>
                                        <h4 className="title-sel-stage">Launch with <br/>no revenue</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- item --> */}
                            <div className="item-input-f-regist1">
                                <div className="input-f-regst-c2">
                                    <input onClick={() => handleClick()} type="submit" value="Next" className="bt-next-submit-reg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StageOfYourStartup