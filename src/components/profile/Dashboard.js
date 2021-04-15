import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import alertRed from '../../utils/alert'

function Dashboard (params) {

    return (
        <>
            {/* section thumbnail info */}
            <div className="wrap-sec-thumbnail-info-pitch">
                <div className="slide-tab-profile-tab-box slick-initialized slick-slider">
                    <div className="slick-list draggable" tabIndex={0}><div className="slick-track" style={{opacity: 1, width: 796, transform: 'translate3d(0px, 0px, 0px)'}}>
                        <div className="item slick-slide slick-active" data-slick-index={0} style={{width: 199}}>
                            <div className="item-thumb-info-all-pitch">
                                <div className="sec-icon-thumb-icon-pitch">
                                    <div className="item-icon-thumb-pitch">
                                        <i className="fa fa-usd" />
                                    </div>
                                    <div className="item-icon-thumb-pitch-text">Pitch Request</div>
                                    <div className="clear" />
                                </div>
                                <h2 className="title-numb-pitch-sec"> {params.pitch_request ? params.pitch_request : '0'} </h2>
                                <h3 className="title-numb-pitch-sec2">Left this month</h3>
                            </div>
                        </div>
                        <div className="item slick-slide slick-active" data-slick-index={1} style={{width: 199}}>
                            <div className="item-thumb-info-all-pitch">
                                <div className="sec-icon-thumb-icon-pitch">
                                    <div className="item-icon-thumb-pitch">
                                        <i className="fa fa-users" />
                                    </div>
                                    <div className="item-icon-thumb-pitch-text">Mentoring Session</div>
                                    <div className="clear" />
                                </div>
                                <h2 className="title-numb-pitch-sec">0</h2>
                                <h3 className="title-numb-pitch-sec2">Left this month</h3>
                            </div>
                        </div>
                        <div className="item slick-slide slick-active" data-slick-index={2} style={{width: 199}}>
                            <div className="item-thumb-info-all-pitch">
                                <div className="sec-icon-thumb-icon-pitch">
                                    <div className="item-icon-thumb-pitch">
                                        <i className="fa fa-usd" />
                                    </div>
                                    <div className="item-icon-thumb-pitch-text">Strategy Call</div>
                                    <div className="clear" />
                                </div>
                                <h2 className="title-numb-pitch-sec">0</h2>
                                <h3 className="title-numb-pitch-sec2">Left this month</h3>
                            </div>
                        </div>
                        <div className="item slick-slide" data-slick-index={3} style={{width: 199}}>
                            <div className="item-thumb-info-all-pitch">
                                <div className="sec-icon-thumb-icon-pitch">
                                    <div className="item-icon-thumb-pitch">
                                        <i className="fa fa-usd" />
                                    </div>
                                    <div className="item-icon-thumb-pitch-text">Strategy Call</div>
                                        <div className="clear" />
                                    </div>
                                <h2 className="title-numb-pitch-sec">0</h2>
                                <h3 className="title-numb-pitch-sec2">Left this month</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* nav slide */}
            <div className="nav-slide-thumb-info-prev">
                <i className="fa fa-angle-left" />
            </div>
            <div className="nav-slide-thumb-info-next">
                <i className="fa fa-angle-right" />
            </div>
            </div>
            {/* section profile strenght */}
            <div className="wrap-profile-strenght-col">
                <h3 className="head-title-profile-strenght-text">
                    Profile Strength: <b>Intermediate</b> <span className="icon-info-ds tptip" data-toggle="tooltip" data-placement="top" title data-original-title="6 months membership of our PitchUp platform">i</span>
                </h3>
                <div className="wrap-bar-profile-strenght">
                    <div className="bar-base-profile-strenght">
                    {/* set red bar with percent */}
                    <div className="bar-profile-process-bar" style={{width: '60%'}}>
                        <div className="bar-checklist-process-bar">
                            <img src="images/imgbar-profile.png" alt />
                        </div>
                    </div>
                    <div className="bar-seperator-profile-strenght">
                        <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        </ul>
                        <div className="bar-checklist-process-base">
                            <img src="images/profile-complete.png" alt />
                        </div>
                        <div className="clear" />
                    </div>
                    </div>
                </div>
            </div>
            {/* add elevator pitch */}
            <div className="wrap-add-elevator-pitch">
                <h3 className="title-add-elevator-pitch-text1">Add an Elevator Pitch to put more interest in what your startup does</h3>
                <h4 className="title-add-elevator-pitch-text2">Elevator Pitch help Investors to understand the most important aspects of your business
                    and services within short amount of time.</h4>
                <div className="wrap-bt-add-elevator">
                    <a href="#" className="bt-add-elevator-pitch">Add Elevator Pitch</a>
                </div>
            </div>
            {/* you follow */}
            <div className="wrap-you-follow-section">
                <h3 className="heading-title-you-follow">
                    You Follow
                </h3>
            </div>
        </>
    )
}

export default Dashboard
