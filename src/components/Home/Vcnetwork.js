import React, { Component } from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import logo1 from '../../assets/images/ac logo.png'
import logo2 from '../../assets/images/alpha jwc venture logo.png'
import logo3 from '../../assets/images/bri ventures logo.png'
import logo4 from '../../assets/images/Copy of SEQUOIA.png'
import logo5 from '../../assets/images/gdp logo.png'
import logo6 from '../../assets/images/gfc logo.png'
import logo7 from '../../assets/images/gobi logo.png'
import logo8 from '../../assets/images/indogen logo.png'
import logo9 from '../../assets/images/kejora logo.png'
import logo10 from '../../assets/images/mandiri logo.png'
import logo11 from '../../assets/images/mdi logo.png'
import logo12 from '../../assets/images/orbit logo.png'
import logo13 from '../../assets/images/pegasus-logo.png'
import logo14 from '../../assets/images/plug n play logo.png'
import logo15 from '../../assets/images/prasetia logo.png'
import logo16 from '../../assets/images/skystar logo.png'
import logo17 from '../../assets/images/sovereign logo.png'
import logo18 from '../../assets/images/TMI logo.png'

class Vcnetwork extends Component{

    render(){
        const data = [
            {
                logo: logo1
            },
            {
                logo: logo2
            },
            {
                logo: logo3
            },
            {
                logo: logo4
            },
            {
                logo: logo5
            },
            {
                logo: logo6
            },
            {
                logo: logo7
            },
            {
                logo: logo8
            },
            {
                logo: logo9
            },
            {
                logo: logo10
            },
            {
                logo: logo11
            },
            {
                logo: logo12
            },
            {
                logo: logo13
            },
            {
                logo: logo14
            },
            {
                logo: logo15
            },
            {
                logo: logo16
            },
            {
                logo: logo17
            },
            {
                logo: logo18
            }
        ]
        return (
            <div>
                <div className="wrap-section-5">
                    <h3 className="title-section-5-vc">
                        Our VC Network
                    </h3>
                    <div className="logo-running marquee">
                        <Marquee velocity={70}>
                            {
                                data.map((item, key) => {
                                    return (
                                        <div className="item-logo-running-vc">
                                            <div className="item-logo-running-vc-in">
                                                <img src={item.logo} alt=""/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Marquee>
                    </div>
                </div>
            </div>
        )
    }
}
export default Vcnetwork