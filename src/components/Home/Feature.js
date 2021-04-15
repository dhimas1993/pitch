import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import $ from 'jquery';
import Feature1 from '../../assets/images/fe1.png'
import Feature2 from '../../assets/images/fe2.png'
import Feature3 from '../../assets/images/fe3.png'
import Feature4 from '../../assets/images/fe4.png'
import Feature5 from '../../assets/images/fe5.png'
import Feature6 from '../../assets/images/fe6.png'
import logo from '../../assets/images/logo.png'

class Feature extends Component{
    componentDidMount() {
        $('.tab-feature-section li').on("click", function() {
            var nm = $(this).data('mtab');
            $('.item-section-feature-c').removeClass('item-section-feature-c-active');
            $(this).siblings('li').removeClass('m-active');
            $(this).addClass('m-active');
            $('#'+nm).addClass('item-section-feature-c-active');
        });
    }
    render(){
        return (
            <div>
                <div className="wrap-section-1">
                    <Row>
                        <Col lg={6}>
                            <div className="section-1-left">
                                <div className="section-1-left-heading">
                                    <h3 className="head-title-sec2">
                                        Feature
                                    </h3>
                                    <h2 className="head-title-sec-2-2">
                                        Your end to end <br/>dealflow process <br/>within one platform
                                    </h2>
                                </div>
                                <div className="wrap-tab-feature-section">
                                    <ul className="tab-feature-section">
                                        <li data-mtab="feature1" className="m-active">
                                            <div className="item-feature-sec-no">01</div>
                                            <div className="item-feature-sec-text">Investor Network</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li data-mtab="feature2">
                                            <div className="item-feature-sec-no">02</div>
                                            <div className="item-feature-sec-text">Online Speed Dating</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li data-mtab="feature3">
                                            <div className="item-feature-sec-no">03</div>
                                            <div className="item-feature-sec-text">Pitch deck Consultation</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li data-mtab="feature4">
                                            <div className="item-feature-sec-no">04</div>
                                            <div className="item-feature-sec-text">Mentoring</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li data-mtab="feature5">
                                            <div className="item-feature-sec-no">05</div>
                                            <div className="item-feature-sec-text">Startup Perks</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li data-mtab="feature6">
                                            <div className="item-feature-sec-no">06</div>
                                            <div className="item-feature-sec-text">Founders Community</div>
                                            <div className="clear"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="section-1-right">
                                <div className="item-section-feature-c item-section-feature-c-active" id="feature1">
                                    <div className="item-section-f-c-img">
                                        <img src={Feature1} alt=""/>
                                    </div>
                                    <div className="item-section-f-c-info">
                                        <h3 className="item-s-f-c-text1">VC & Angels Directory</h3>
                                        <h3 className="item-s-f-c-text2">
                                            Explore 40+ Indonesia focused investor network of VC & Angels and stay updated with latest news.
                                        </h3>
                                    </div>
                                </div>
                                <div className="item-section-feature-c" id="feature2">
                                    <div className="item-section-f-c-img">
                                        <img src={Feature2} alt=""/>
                                    </div>
                                    <div className="item-section-f-c-info">
                                        <h3 className="item-s-f-c-text1">Online Speed Dating</h3>
                                        <h3 className="item-s-f-c-text2">
                                            Online Speed Dating is our monthly pitching event where startups are ensured of pitching schedules with Venture Capital 
                                        </h3>
                                    </div>
                                </div>
                                <div className="item-section-feature-c" id="feature3">
                                    <div className="item-section-f-c-img">
                                        <img src={Feature3} alt=""/>
                                    </div>
                                    <div className="item-section-f-c-info">
                                        <h3 className="item-s-f-c-text1">Pitch Deck Consultation</h3>
                                        <h3 className="item-s-f-c-text2">
                                            Proofread your pitch deck and get consultation to create a perfect presentation for your startup.
                                        </h3>
                                    </div>
                                </div>
                                <div className="item-section-feature-c" id="feature4">
                                    <div className="item-section-f-c-img">
                                        <img src={Feature4} alt=""/>
                                    </div>
                                    <div className="item-section-f-c-info">
                                        <h3 className="item-s-f-c-text1">Mentorship</h3>
                                        <h3 className="item-s-f-c-text2">
                                            Have a one-on-one conversation with some of Indonesia's top minds in the tech industry.
                                        </h3>
                                    </div>
                                </div>
                                <div className="item-section-feature-c" id="feature5">
                                    <div className="item-section-f-c-img">
                                        <img src={Feature5} alt=""/>
                                    </div>
                                    <div className="item-section-f-c-info">
                                        <h3 className="item-s-f-c-text1">Startup Perks</h3>
                                        <h3 className="item-s-f-c-text2">
                                            Save $$$ with our curated directory of tools and resources to build your startup 
                                        </h3>
                                    </div>
                                </div>
                                <div className="item-section-feature-c" id="feature6">
                                    <div className="item-section-f-c-img">
                                        <img src={Feature6} alt=""/>
                                    </div>
                                    <div className="item-section-f-c-info">
                                        <h3 className="item-s-f-c-text1">Founders Community</h3>
                                        <h3 className="item-s-f-c-text2">
                                            Join our private community to network with fellow founders and visionaries.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    
                </div>
            </div>
        )
    }
}
export default Feature