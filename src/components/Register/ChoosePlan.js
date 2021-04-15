import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import {useSelector} from 'react-redux'
import $ from 'jquery';
import Navigationbar from './Parts/NavigationInfo'
import Free from '../../assets/images/pri1.png';
import PriorityPackage from '../../assets/images/pri2.png';

function ChoosePlan (){
    const [Choose, setChoose] = useState('')
    const [redirect, setRedirect] = useState(false)

    const id = useSelector(state => state.Auth._id)

    useEffect(() => {
        // tab package
        $('.tab-priority-price li').on("click", function() {
            var nm = $(this).data('mtab');
            $('.title-pricing-info-text2-priority').removeClass('title-pricing-info-text2-priority-active');
            $('.c-item-pricing-list-content-priority').removeClass('c-item-pricing-list-content-priority-active');
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $('#'+nm).addClass('title-pricing-info-text2-priority-active');
            $('.c-item-pricing-list-content-priority#'+nm).addClass('c-item-pricing-list-content-priority-active');
        });
    }, [])

    const handleChoose = (e) => {
        // console.log(e)
        setChoose(e)
    }

    const handleSubmit = async () => {
        // console.log(Choose)
        axios.put(`${process.env.REACT_APP_BASE_URL}/users/packagePlan`,{
            id,
            package_plan : Choose 
        }).then((res) => {
            setRedirect(true)
            console.log(res.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>
            {redirect ? <Redirect to="/"/> : null}
            <div className="all-wrap-regist-platform">
                <div className="wrap-regist-platform-page">
                    <Navigationbar Navigationactive="navigation3"></Navigationbar>
                    <div className="wrap-regis-form-c">
                        {/* <!-- regist form content --> */}
                        <h2 className="head-title-regist-platform-c">
                            Choose your Plan
                        </h2>
                        <div className="f-regist1">
                            <div className="box-choose-plan">
                                {/* <!-- item --> */}
                                <div className="item-box-pricing-info-sec">
                                    <div className="item-box-pricing-info-sec-in">
                                        {/* <!-- top --> */}
                                        <div className="box-pricing-info-sec-top">
                                            <div className="i-box-pricing-info-img">
                                                <img src={Free} alt=""/>
                                            </div>
                                            <h3 className="title-pricing-info-text1">
                                                free
                                            </h3>
                                            <h3 className="title-pricing-info-text2">
                                                <span className="pricing-rp">Rp</span>0
                                            </h3>
                                        </div>
                                        {/* <!-- list feature --> */}
                                        <div className="wrap-item-pricing-list-feature">
                                            <h3 className="title-list-feature-p">
                                                Top Feature
                                            </h3>
                                            <div className="c-item-pricing-list-content">
                                                <ul>
                                                    <li>Access to 10 Investor Directory every month </li>
                                                    <li>Access to our free Startup Perks</li>
                                                    <li>Free 1 strategy call with Startupindonesia</li>
                                                    <li>Join Founders Community Channel</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className="item-box-pricing-info-sec item-box-pricing-info-sec-priority">
                                    <div className="item-box-pricing-info-sec-in">
                                        <div className="tab-best-value">
                                            BEST VALUE
                                        </div>
                                        {/* <!-- top --> */}
                                        <div className="box-pricing-info-sec-top">
                                            <div className="i-box-pricing-info-img">
                                                <img src={PriorityPackage} alt=""/>
                                            </div>
                                            <h3 className="title-pricing-info-text1">
                                                PRIORITY PACKAGE
                                            </h3>
                                            <h3 className="title-pricing-info-text2 title-pricing-info-text2-priority" id="tab-Monthly">
                                                <span className="pricing-rp">Rp</span>1.500.000<span className="pricing-mo">/mo</span>
                                            </h3>
                                            <h3 className="title-pricing-info-text2 title-pricing-info-text2-priority" id="tab-Quarterly">
                                                <span className="pricing-rp">Rp</span>1.250.000<span className="pricing-mo">/mo</span>
                                            </h3>
                                            <h3 className="title-pricing-info-text2 title-pricing-info-text2-priority title-pricing-info-text2-priority-active" id="tab-Annually">
                                                <span className="pricing-rp">Rp</span>1.000.000<span className="pricing-mo">/mo</span>
                                            </h3>
                                            <div className="wrap-tab-priority-price">
                                                <ul className="tab-priority-price">
                                                    <li onClick={() => handleChoose('Monthly')} data-mtab="tab-Monthly">Monthly</li>
                                                    <li onClick={() => handleChoose('Quarterly')} data-mtab="tab-Quarterly">Quarterly</li>
                                                    <li onClick={() => handleChoose('Annualy')} data-mtab="tab-Annually" className="active">Annually</li>
                                                </ul>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                        {/* <!-- list feature --> */}
                                        <div className="wrap-item-pricing-list-feature">
                                            <h3 className="title-list-feature-p">
                                                Top Feature
                                            </h3>
                                            <div className="c-item-pricing-list-content c-item-pricing-list-content-priority" id="tab-Monthly">
                                                <ul>
                                                    <li>Access to all Venture Capital, Angels, Incubator Directory</li>
                                                    <li>Access to all Startup Perks</li>
                                                    <li>Strategy call with Startupindonesia every month</li>
                                                    <li>4x Online Mentoring with Star Mentor</li>
                                                    <li>Proofread Pitchdeck handled by our analyst every month</li>
                                                    <li>Online Speed Dating every month**</li>
                                                    <li>Join Founders Community Channel</li>
                                                </ul>
                                            </div>
                                            <div className="c-item-pricing-list-content c-item-pricing-list-content-priority" id="tab-Quarterly">
                                                <ul>
                                                    <li>Access to all Venture Capital, Angels, Incubator Directory</li>
                                                    <li>Access to all Startup Perks</li>
                                                    <li>Strategy call with Startupindonesia every month</li>
                                                    <li>4x Online Mentoring with Star Mentor</li>
                                                    <li>Proofread Pitchdeck handled by our analyst every month</li>
                                                    <li>Online Speed Dating every month**</li>
                                                    <li>Join Founders Community Channel</li>
                                                </ul>
                                            </div>
                                            <div className="c-item-pricing-list-content c-item-pricing-list-content-priority c-item-pricing-list-content-priority-active" id="tab-Annually">
                                                <ul>
                                                    <li>Access to all Venture Capital, Angels, Incubator Directory</li>
                                                    <li>Access to all Startup Perks</li>
                                                    <li>Strategy call with Startupindonesia every month</li>
                                                    <li>4x Online Mentoring with Star Mentor</li>
                                                    <li>Proofread Pitchdeck handled by our analyst every month</li>
                                                    <li>Online Speed Dating every month**</li>
                                                    <li>Join Founders Community Channel</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
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
export default ChoosePlan