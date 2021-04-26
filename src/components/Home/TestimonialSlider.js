import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import ava1 from '../../assets/images/tes1.jpg'
import ava2 from '../../assets/images/tes2.png'
import ava3 from '../../assets/images/avat.png'
import ava4 from '../../assets/images/tes3.jpg'
import ava5 from '../../assets/images/tes4.jpg'
import ava6 from '../../assets/images/tes5.jpg'

class Testimonials extends Component{
    render(){
        
        const data = [
            {
                testimonial: "the Best VC and startups speed dating session Ive joined so far",
                username: 'Fauzan Gani',
                position: 'Founder & CEO Doogether',
                avatar: ava1
            },
            {
                testimonial: "Startupindonesia bring a lot of value in the startup scene in Indonesia, for both parties, startups and investors",
                username: 'Dennis Tjandra',
                position: 'Founder & CEO HelloBeauty',
                avatar: ava2
            },
            {
                testimonial: "I can pack a week’s worth of meetings into two hours, thanks StartupIndonesia!",
                username: 'Nazier Ariffin 3',
                position: 'Head of Strategic Investment at Telkomsel',
                avatar: ava3
            },
            {
                testimonial: "Startupindonesia.co has given us the opportunity to connect with the global investors on their speed dating event. The experience and inputs that we had from the VC's would give us benefits in our business and our fundraising round.",
                username: 'Susanto',
                position: 'Founder & CEO ZiCare',
                avatar: ava4
            },
            {
                testimonial: "So far, I really enjoy the whole event. The best speed dating event I have ever joined",
                username: 'Chrisvania Nyssa',
                position: 'Investment Manager GDP Venture',
                avatar: ava5
            },
            {
                testimonial: "I can pack a week’s worth of meetings into two hours, thanks StartupIndonesia!",
                username: 'Nazier Ariffin 6',
                position: 'Head of Strategic Investment Telkomsel Mitra Inovasi',
                avatar: ava3
            },
            {
                testimonial: "It was great! So far it has been very helpful. Solving the VC's pain points",
                username: 'Ilman Dzikri',
                position: 'Investment Associate of Alpha JWC',
                avatar: ava6
            }
        ]
        const options = {
            loop: true,
                autoplayTimeout: 6000,
                autoplay: true,
                touchDrag: true,
                mouseDrag: false,
                center: true,
                autoplayHoverPause: true,
                autoHeight: false,
                nav: false,
                dots: true,
                smartSpeed: 700,
                responsive:{
                    0:{
                        items:1,
                        margin: 5,
                        stagePadding: 0,
                    },
                    769:{
                        items:2,
                        margin: 10,
                        stagePadding: 10,
                    },
                    993:{
                        items:3,
                        margin: 7,
                        stagePadding: 10,
                    },
                    1251:{
                        items:3,
                        margin: 7,
                        stagePadding: 130,
                    },
                    1367:{
                        items:3,
                        margin: 7,
                        stagePadding: 150,
                    }
                }
        };

        const events = {
        
        };
        return (
            <div>
                <div className="wrap-slider-testimonials">
                    <div className="slider-testimonials">
                    <OwlCarousel refs="car" options={options} events={events}>
                        {
                            data.map((item, key) => {
                                return(
                                    <div className="item">
                                        <div className="item-slider-testimonials">
                                            <div className="item-slider-testimonials-in">
                                                <div className="i-slider-testimonials-text">
                                                   "{item.testimonial}"
                                                </div>
                                                <div className="i-slider-testimonials-user-info">
                                                    <div className="i-slider-testimonials-u-ava">
                                                        <img src={item.avatar} alt=""/>
                                                    </div>
                                                    <div className="i-slider-testimonials-u-info">
                                                        <h4 className="i-slider-t-name">{item.username}</h4>
                                                        <h4 className="i-slider-t-j">{item.position}</h4>
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        )
    }
}
export default Testimonials