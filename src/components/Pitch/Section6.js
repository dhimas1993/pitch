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
                <div className="wrap-section-more-box">
                    <div className="item-section-more-box">
                        <h2 className="title-heading-more-box">
                            And many more
                        </h2>
                        <ul className="list-many-more-box-content">
                            <li>Founders Community</li>
                            <li>Strategy Call</li>
                            <li>Template Pitchdeck</li>
                            <li>Latest News</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section5