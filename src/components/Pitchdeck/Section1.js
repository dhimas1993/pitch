import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Img1 from '../../assets/images/cls5.png';
import Img2 from '../../assets/images/cii1.png';
import Img3 from '../../assets/images/icc1.png';

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
                                    <h3 className="title-heading-col-info1">Get Feedback</h3>
                                    <h2 className="title-heading-col-info2">
                                        We guide you on your pitch deck. <br/>You focus on your business.
                                    </h2>
                                    <p className="title-desc-col-info3">
                                    We are eager to help you prepare your deck for Investors. Upload your deck on our platform and get a clear direction for your next milestone  
                                    </p>
                                    <ul className="list-point-col-info list-point-col-info-cus1">
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img2} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">A full detailed feedback report</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img3} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">Monthly pitch deck proofreading</div>
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