import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/images/patchs2.png'
import pitch from '../../assets/images/pr1.png'
import mentoring from '../../assets/images/pr2.png'
import perks from '../../assets/images/pr3.png'
import Pitchdeck from '../../assets/images/pr4.png'
import Community from '../../assets/images/pr5.png'

class Detailbarmenu extends Component{
    
    render(){
        return (
            <div>
                <div className="wrap-section-2">
                    <div className="path-bg-clip">
                        <img src={background} alt=""/>
                    </div>
                    <div className="wrap-section-2-in">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="item-section-2-info">
                                    <h3 className="title-section-2-info">
                                        Looking for <br/> more details?
                                    </h3>
                                    <h4 className="title-section-2-info2">
                                        Check how can our service help you grow
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="wrap-item-section-2-box">
                                    <div className="item-box-section-2-c">
                                        <div className="item-box-section-2-c-in">
                                            <div className="img-section-2-box-img">
                                                <img src={pitch} alt=""/>
                                            </div>
                                            <div className="section-2-box-text">
                                                Pitch
                                            </div>
                                            <Link to="/" className="bt-learnmore-item-box">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item-box-section-2-c">
                                        <div className="item-box-section-2-c-in">
                                            <div className="img-section-2-box-img">
                                                <img src={mentoring} alt=""/>
                                            </div>
                                            <div className="section-2-box-text">
                                                Mentoring
                                            </div>
                                            <Link to="/" className="bt-learnmore-item-box">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item-box-section-2-c">
                                        <div className="item-box-section-2-c-in">
                                            <div className="img-section-2-box-img">
                                                <img src={perks} alt=""/>
                                            </div>
                                            <div className="section-2-box-text">
                                                Perks
                                            </div>
                                            <Link to="/" className="bt-learnmore-item-box">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item-box-section-2-c">
                                        <div className="item-box-section-2-c-in">
                                            <div className="img-section-2-box-img">
                                                <img src={Pitchdeck} alt=""/>
                                            </div>
                                            <div className="section-2-box-text">
                                                Pitchdeck
                                            </div>
                                            <Link to="/" className="bt-learnmore-item-box">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="item-box-section-2-c">
                                        <div className="item-box-section-2-c-in">
                                            <div className="img-section-2-box-img">
                                                <img src={Community} alt=""/>
                                            </div>
                                            <div className="section-2-box-text">
                                                Community
                                            </div>
                                            <Link to="/" className="bt-learnmore-item-box">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detailbarmenu