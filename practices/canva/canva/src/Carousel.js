import React, { Component , Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import './Carousel.css';

// install modules
SwiperCore.use([Navigation]);

class Carousel extends Component {
    render() {
        let navigationNextDom = '';
        let navigationPrevDom = '';
        if (this.props.navigation == true) {
            navigationNextDom = (
                <div className="swiper-button-next"/>
            );
            navigationPrevDom = (
                <div className="swiper-button-prev"/>
            );
        }
        return (
            <div className='Swiper'id={this.props.swiperId}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper)=> console.log(swiper)}
                    className="swiper__box"
                    navigation={
                        {
                                nextEl: '#' + this.props.swiperId + ' .swiper-button-next',
                                prevEl: '#' + this.props.swiperId + ' .swiper-button-prev',
                        }
                    }
                >
                    {React.Children.map(
                        this.props.children,
                        (child) => {
                            return (
                                <SwiperSlide className="swiper__item">{ child }</SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
                {navigationNextDom}
                {navigationPrevDom}
            </div>
        );
    }
};

export default Carousel;