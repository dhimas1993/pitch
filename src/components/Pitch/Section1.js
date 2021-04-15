import React, { Component } from 'react';
import Roadmap from '../../assets/images/roadmap.png';

class Section1 extends Component{
    componentDidMount() {
        
    }
    render(){
        return (
            <div>
                <div className="wrap-section-roadmap">
                    <div className="heading-title-roadmap">
                        <h2 className="title-h-roadmap-1">A roadmap for you to get funding</h2>
                        <h4 className="title-h-roadmap-2">From building a pitchdeck, meeting with mentors, and pitching to investors, we've got you covered</h4>
                    </div>
                    <div className="img-roadmap">
                        <img src={Roadmap} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Section1