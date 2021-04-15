import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../../assets/images/ps63.png';

class Section4 extends Component{
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
                                    Online Mentoring
                                </h3>
                                <h4 className="title-info-s6-roadmap2">
                                    Get connected to our network of Star Mentor
                                </h4>
                                <p className="title-info-s6-roadmap3">
                                    Asking for guidance helps you see what you may not be able to see, connect with mentors from StartupIndonesia to enhance your chances of success. You can meet experienced figures in the startup ecosystem and get their guidance. Tell them your pain points and get insights from experts to grow your startup. 
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
export default Section4