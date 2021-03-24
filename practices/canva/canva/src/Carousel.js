import React, { Component , Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

class Carousel extends Component {
    render() {
        return (
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper)=> console.log(swiper)}
            >
                {React.Children.map(
                    this.props.children,
                    (child) => {
                        return (
                            <SwiperSlide>{ child }</SwiperSlide>
                        )
                    }
                )}
            </Swiper>
        );
    }
};

export default Carousel;