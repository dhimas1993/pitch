import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import fitvids from 'fitvids';

class Header extends Component{
    componentDidMount() {
        fitvids('.full-video')
    }
    render(){
        return (
            <div>
                <div className="wrap-main-header-ban">
                    <div className="bg-square"></div>
                    <Row>
                        <Col lg={5}>
                            <div className="main-header-ban-left">
                                <h1 className="heading-text-ban-left">
                                    Connect with Investors<br/>with just a <a href="#">click</a>
                                </h1>
                                <h3 className="heading-text-ban-info">
                                    You are now ready to get connected to Top Investor, get your Pitch Deck ready, and access to the curated tools to help your startup grow.
                                </h3>
                                <div className="form-email-header-ban">
                                    <input type="text" placeholder="Enter your email address"/>
                                </div>
                                <input type="submit" value="Get Started" className="bt-submit-email-address"/>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="heading-video-ban full-video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/sOF4OMMLrDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Header