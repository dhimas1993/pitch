import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from '../../assets/images/cls6.png';
import Img2 from '../../assets/images/pci1.png';
import Img3 from '../../assets/images/pci2.png';

class Section2 extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-2-col-page">
                    <div className="item-section-2-col-page">
                        <Row>
                            <Col lg={{ span: 5, order: 12}}>
                                <div className="section-2-col-page-img">
                                    <img src={Img1} alt=""/>
                                </div>
                            </Col>
                            <Col lg={{ span: 7, order: 1}}>
                                <div className="section-2-col-page-info">
                                    <h3 className="title-heading-col-info1">Get curated</h3>
                                    <h2 className="title-heading-col-info2">
                                    Increase your chances of pitching to <br/>Investors by getting your deck <br/>curated.
                                    </h2>
                                    <p className="title-desc-col-info3">
                                    We've handled hundreds of decks from Startups across Indonesia. Get curated by our team of analysts and be ready to pitch to Top Investors. 
                                    </p>
                                    <ul className="list-point-col-info">
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img2} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">Get a warm introduction to Top Investors</div>
                                            <div className="clear"></div>
                                        </li>
                                        <li>
                                            <div className="list-point-col-info-icon">
                                                <img src={Img3} alt=""/>
                                            </div>
                                            <div className="list-point-col-info-text">Participate in our Online <br/> Speed Dating event</div>
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