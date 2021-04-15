import React, { Component } from 'react';
import TestimonialSlider from './TestimonialSlider'
import logo from '../../assets/images/logo.png'


class Testimonials extends Component{
    componentDidMount() {
    }
    render(){
        return (
            <div>
                <div className="wrap-section-4">
                    <div className="heading-title-testimonials">
                        <h3 className="title-testimonials">testimonials</h3>
                        <h2 className="title-testimonial-2">
                            What people think about <img src={logo} alt=""/>
                        </h2>
                    </div>
                    <TestimonialSlider></TestimonialSlider>
                </div>
            </div>
        )
    }
}
export default Testimonials