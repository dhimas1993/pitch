import React, { Component } from 'react';
import Img1 from '../../assets/images/imgn1.png';
import Img2 from '../../assets/images/imgn2.png';
import Img3 from '../../assets/images/imgn3.png';
import Img4 from '../../assets/images/imgn4.png';

class Section extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-join-slack">
                    <h3 className="title-section-join-slack">
                        Get in touch with all founders and expert across Indonesia <br/>and become part of our startup ecosystem.
                    </h3>
                    <div className="section-2-col-slack">
                        {/* <!-- item --> */}
                        <div className="item-sec-2-col-slack">
                            <div className="item-sec-2-col-slack-in">
                                <div className="item-sec-2-col-slack-img">
                                    <img src={Img1} alt=""/>
                                </div>
                                <div className="item-sec-2-col-slack-info">
                                    <h3 className="title-heading-slack-main">
                                        Network
                                    </h3>
                                    <h4 className="par-desc-slack-info">
                                        Connect and network with Founders across Indonesia.
                                    </h4>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item-sec-2-col-slack">
                            <div className="item-sec-2-col-slack-in">
                                <div className="item-sec-2-col-slack-img">
                                    <img src={Img2} alt=""/>
                                </div>
                                <div className="item-sec-2-col-slack-info">
                                    <h3 className="title-heading-slack-main">
                                        Ask the Expert
                                    </h3>
                                    <h4 className="par-desc-slack-info">
                                        We host 'Ask the Expert' every week with Top Mentors and VC around the industry. There will be open Q&A session available for all members
                                    </h4>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item-sec-2-col-slack">
                            <div className="item-sec-2-col-slack-in">
                                <div className="item-sec-2-col-slack-img">
                                    <img src={Img3} alt=""/>
                                </div>
                                <div className="item-sec-2-col-slack-info">
                                    <h3 className="title-heading-slack-main">
                                        Fundraising 101
                                    </h3>
                                    <h4 className="par-desc-slack-info">
                                        We share tips on how to pitch to investors, and help answer specific fundraising questions.
                                    </h4>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item-sec-2-col-slack">
                            <div className="item-sec-2-col-slack-in">
                                <div className="item-sec-2-col-slack-img">
                                    <img src={Img4} alt=""/>
                                </div>
                                <div className="item-sec-2-col-slack-info">
                                    <h3 className="title-heading-slack-main">
                                        Events
                                    </h3>
                                    <h4 className="par-desc-slack-info">
                                        All fundraising events, webinars, conference in one place.
                                    </h4>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section