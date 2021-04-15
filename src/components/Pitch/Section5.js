import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Img from '../../assets/images/ps64.png';

class Section5 extends Component{
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
                                    Startup Perks
                                </h3>
                                <h4 className="title-info-s6-roadmap2">
                                    Save $$$ with our curated directory of tools and resources to build your startup
                                </h4>
                                <p className="title-info-s6-roadmap3">
                                    Need public relations? Trying to enhance your company’s talents? Need legal advice? Don’t worry we’ve got you covered. StartupIndonesia has partnered with multiple ventures to provide you with the best deals to kick off your company. Enjoy these perks from our partners once you join our premium plan
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
export default Section5