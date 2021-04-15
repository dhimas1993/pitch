import React, { Component } from 'react';
import $ from 'jquery';
import Bgpage from '../../assets/images/bgp6.png'
import { Link } from 'react-router-dom';
import IconPitch from '../../assets/images/iconpitch.png'
import Icon1 from '../../assets/images/pri1.png'
import Icon2 from '../../assets/images/pri2.png'

class PricingTab extends Component{
    componentDidMount() {
        $('.tab-priority-price li').on("click", function() {
            var nm = $(this).data('mtab');
            $('.title-pricing-info-text2-priority').removeClass('title-pricing-info-text2-priority-active');
            $('.c-item-pricing-list-content-priority').removeClass('c-item-pricing-list-content-priority-active');
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            $('#'+nm).addClass('title-pricing-info-text2-priority-active');
            $('.c-item-pricing-list-content-priority#'+nm).addClass('c-item-pricing-list-content-priority-active');
        });
    }
    render(){
        return (
            <div>
                <div className="wrap-section-pricing">
                    <div className="heading-title-sec-pricing">
                        <h3 className="title-sec-pricing-1">
                            <img src={IconPitch} alt=""/> Pricing Plan
                        </h3>
                        <h3 className="title-sec-pricing-2">
                            Choose a plan that's suits you
                        </h3>
                    </div>
                    <div className="wrap-box-pricing-info-c">
                        {/* <!-- item --> */}
                        <div className="item-box-pricing-info-sec">
                            <div className="item-box-pricing-info-sec-in">
                                {/* <!-- top --> */}
                                <div className="box-pricing-info-sec-top">
                                    <div className="i-box-pricing-info-img">
                                        <img src={Icon1} alt=""/>
                                    </div>
                                    <h3 className="title-pricing-info-text1">
                                        free
                                    </h3>
                                    <h3 className="title-pricing-info-text2">
                                        <span className="pricing-rp">Rp</span>0
                                    </h3>
                                </div>
                                {/* <!-- list feature --> */}
                                <div className="wrap-item-pricing-list-feature">
                                    <h3 className="title-list-feature-p">
                                        Top Feature
                                    </h3>
                                    <div className="c-item-pricing-list-content">
                                        <ul>
                                            <li>Access to 10 Investor Directory every month </li>
                                            <li>Access to our free Startup Perks</li>
                                            <li>Free 1 strategy call with Startupindonesia</li>
                                            <li>Join Founders Community Channel</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- button cta --> */}
                                <div className="wrap-button-cta-pricing-list-c">
                                    <Link to="#" className="bt-cta-pricing-list-1">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item-box-pricing-info-sec item-box-pricing-info-sec-priority">
                            <div className="item-box-pricing-info-sec-in">
                                <div className="tab-best-value">
                                    BEST VALUE
                                </div>
                                {/* <!-- top --> */}
                                <div className="box-pricing-info-sec-top">
                                    <div className="i-box-pricing-info-img">
                                        <img src={Icon2} alt=""/>
                                    </div>
                                    <h3 className="title-pricing-info-text1">
                                        PRIORITY PACKAGE
                                    </h3>
                                    <h3 className="title-pricing-info-text2 title-pricing-info-text2-priority" id="tab-Monthly">
                                        <span className="pricing-rp">Rp</span>1.500.000<span className="pricing-mo">/mo</span>
                                    </h3>
                                    <h3 className="title-pricing-info-text2 title-pricing-info-text2-priority" id="tab-Quarterly">
                                        <span className="pricing-rp">Rp</span>1.250.000<span className="pricing-mo">/mo</span>
                                    </h3>
                                    <h3 className="title-pricing-info-text2 title-pricing-info-text2-priority title-pricing-info-text2-priority-active" id="tab-Annually">
                                        <span className="pricing-rp">Rp</span>1.000.000<span className="pricing-mo">/mo</span>
                                    </h3>
                                    <div className="wrap-tab-priority-price">
                                        <ul className="tab-priority-price">
                                            <li data-mtab="tab-Monthly">Monthly</li>
                                            <li data-mtab="tab-Quarterly">Quarterly</li>
                                            <li data-mtab="tab-Annually" className="active">Annually</li>
                                        </ul>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                {/* <!-- list feature --> */}
                                <div className="wrap-item-pricing-list-feature">
                                    <h3 className="title-list-feature-p">
                                        Top Feature
                                    </h3>
                                    <div className="c-item-pricing-list-content c-item-pricing-list-content-priority" id="tab-Monthly">
                                        <ul>
                                            <li>Access to all Venture Capital, Angels, Incubator Directory</li>
                                            <li>Access to all Startup Perks</li>
                                            <li>Strategy call with Startupindonesia every month</li>
                                            <li>4x Online Mentoring with Star Mentor</li>
                                            <li>Proofread Pitchdeck handled by our analyst every month</li>
                                            <li>Online Speed Dating every month**</li>
                                            <li>Join Founders Community Channel</li>
                                        </ul>
                                    </div>
                                    <div className="c-item-pricing-list-content c-item-pricing-list-content-priority" id="tab-Quarterly">
                                        <ul>
                                            <li>Access to all Venture Capital, Angels, Incubator Directory</li>
                                            <li>Access to all Startup Perks</li>
                                            <li>Strategy call with Startupindonesia every month</li>
                                            <li>4x Online Mentoring with Star Mentor</li>
                                            <li>Proofread Pitchdeck handled by our analyst every month</li>
                                            <li>Online Speed Dating every month**</li>
                                            <li>Join Founders Community Channel</li>
                                        </ul>
                                    </div>
                                    <div className="c-item-pricing-list-content c-item-pricing-list-content-priority c-item-pricing-list-content-priority-active" id="tab-Annually">
                                        <ul>
                                            <li>Access to all Venture Capital, Angels, Incubator Directory</li>
                                            <li>Access to all Startup Perks</li>
                                            <li>Strategy call with Startupindonesia every month</li>
                                            <li>4x Online Mentoring with Star Mentor</li>
                                            <li>Proofread Pitchdeck handled by our analyst every month</li>
                                            <li>Online Speed Dating every month**</li>
                                            <li>Join Founders Community Channel</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- button cta --> */}
                                <div className="wrap-button-cta-pricing-list-c">
                                    <Link to="#" className="bt-cta-pricing-list-1">Get Started</Link>
                                    <Link to="#" className="bt-cta-pricing-list-2">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default PricingTab