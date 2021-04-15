import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../../assets/images/cls4.png';
import Img2 from '../../assets/images/iccs1.png';
import Img3 from '../../assets/images/iccs2.png';

class Section2 extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-2-col-page">
                    <div className="item-section-2-col-page">
                        <Row>
                            <Col lg={{ span: 4, order: 12}}>
                                <div className="section-2-col-page-img">
                                    <img src={Img1} alt=""/>
                                </div>
                            </Col>
                            <Col lg={{ span: 8, order: 1}}>
                                <div className="section-2-col-page-info">
                                    <h3 className="title-heading-col-info1">Strategy Call</h3>
                                    <h2 className="title-heading-col-info2">
                                        We help you come up with the <br/>best strategy to grow your startup
                                    </h2>
                                    <p className="title-desc-col-info3">
                                        There's a lot of details in the fundraising process. We've worked with Top Venture Capitals and helped founders raise their capital. Tell us your business and we will provide the ideal storytelling for your venture. 
                                    </p>
                                    <ul className="list-point-col-info list-point-col-info-cus1">
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img2} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">Monthly Strategy Call with our analysts</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img3} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">Personalized Feedback</div>
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
export default Section2