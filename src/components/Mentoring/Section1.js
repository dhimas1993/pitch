import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../../assets/images/cls3.png';
import Img2 from '../../assets/images/icc1.png';
import Img3 from '../../assets/images/icc2.png';
import Img4 from '../../assets/images/icc3.png';

class Section1 extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-2-col-page">
                    <div className="item-section-2-col-page">
                        <Row>
                            <Col lg={6}>
                                <div className="section-2-col-page-img">
                                    <img src={Img1} alt=""/>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="section-2-col-page-info">
                                    <h3 className="title-heading-col-info1">Curated Mentors</h3>
                                    <h2 className="title-heading-col-info2">
                                        Get guidance from our network of <br/><span>Star Mentors</span> based on your <br/>background.
                                    </h2>
                                    <p className="title-desc-col-info3">
                                        Get a guaranteed call with mentors every quarter with just a single click. Grow your startup with personalized advice that suits your Startup needs.  
                                    </p>
                                    <ul className="list-point-col-info">
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img2} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">1:1 conversations</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img3} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">Filter based on background</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img4} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">50+ Mentors</div>
                                            <div className="clear"></div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>    
            </div>
        )
    }
}
export default Section1