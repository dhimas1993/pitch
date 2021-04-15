import React, { Component } from 'react';
import TestimonialSlider from '../Home/TestimonialSlider'


class Testimonials extends Component{
    componentDidMount() {
    }
    render(){
        return (
            <div>
                <div className="wrap-testimonial-pricing">
                    <h3 className="title-heading-sec-pricing">
                        What our customer are saying 
                    </h3>
                    <TestimonialSlider></TestimonialSlider>
                </div>
            </div>
        )
    }
}
export default Testimonials