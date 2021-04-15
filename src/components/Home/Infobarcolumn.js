import React, { Component } from 'react';
import img1 from '../../assets/images/icl1.png'
import img2 from '../../assets/images/icl2.png'
import img3 from '../../assets/images/icl3.png'
import img4 from '../../assets/images/icl4.png'


class Infobarcolumn extends Component{
    
    render(){
        return (
            <div>
                <div className="wrap-section-3">
                    <h2 className="title-heading-section-3">
                        Having a hard time <br/>to raise fund?
                    </h2>
                    <div className="wrap-3col-s3">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="col-s-2-content">
                                    <div className="col-s-2-content-img">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div className="col-s-2-content-numb">
                                        50
                                    </div>
                                    <div className="col-s-2-content-text">
                                        Venture Capital Participated
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="col-s-2-content">
                                    <div className="col-s-2-content-img">
                                        <img src={img2} alt=""/>
                                    </div>
                                    <div className="col-s-2-content-numb">
                                        500+
                                    </div>
                                    <div className="col-s-2-content-text">
                                        Startups Applied
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="col-s-2-content">
                                    <div className="col-s-2-content-img">
                                        <img src={img4} alt=""/>
                                    </div>
                                    <div className="col-s-2-content-numb">
                                        1400+
                                    </div>
                                    <div className="col-s-2-content-text">
                                        Founders
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="col-s-2-content">
                                    <div className="col-s-2-content-img">
                                        <img src={img3} alt=""/>
                                    </div>
                                    <div className="col-s-2-content-numb">
                                        21%
                                    </div>
                                    <div className="col-s-2-content-text">
                                        Invited for 2nd meeting
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
export default Infobarcolumn