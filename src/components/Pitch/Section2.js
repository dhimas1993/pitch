import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../../assets/images/ps6.png';

class Section2 extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-2col-page6">
                    <Row className="row">
                        <Col lg={{ span: 6, order: 12 }}>
                            <div className="img-2-col-page-s6">
                                <img src={Img} alt=""/>
                            </div>
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <div className="wrap-info-section-col-2-roadmap">
                                <h3 className="title-info-s6-roadmap">
                                    Proofread Pitchdeck
                                </h3>
                                <h4 className="title-info-s6-roadmap2">
                                    Get your slide to the standard investor expect
                                </h4>
                                <p className="title-info-s6-roadmap3">
                                    Investors and Venture Capitals get dozens of emails each day from startups asking for funding, this means that they can only spend 3-5 minutes skimming the pitch decks they recieve. Therefore, standing out and having a catchy pitch deck is one of the strategies that you can use to get their attention. Boost your chances of standing out with our pitch deck feedback.
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
export default Section2