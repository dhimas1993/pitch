import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Img from '../../assets/images/ps62.png';

class Section3 extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-2col-page6">
                    <Row className="row">
                        <Col lg={6}>
                            <div className="img-2-col-page-s6">
                                <img src={Img} alt=""/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="wrap-info-section-col-2-roadmap">
                                <h3 className="title-info-s6-roadmap">
                                    Investor Network
                                </h3>
                                <h4 className="title-info-s6-roadmap2">
                                    Get access to our 40+ Investor network
                                </h4>
                                <p className="title-info-s6-roadmap3">
                                    Connecting with investors is hard and tough, we feel you. That’s why we go to such great lengths to connect you with more than 50 Venture Capitals across Southeast Asia. Tap into our network to get 3x more chances of pitching to investors through Startup Indonesia’s referral. 
                                </p>
                                <Link to="#" className="bt-learn-more-roadmap">Learn More</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Section3