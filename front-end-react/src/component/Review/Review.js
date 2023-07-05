import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';
import './Review.css';
import { ReviewBank } from './ReviewBank';

const Review = () => {
    return (
        <section className="review" id="review">
            <h1 className="heading">customer <span>review</span></h1>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    ReviewBank.map((review) => (
                        <SwiperSlide>
                            <div className="review-slider">
                                <div className="swiper-slide slide">

                                    <p>{review.para}</p>
                                    <i className="fas fa-quote-right"></i>
                                    <div className="user">
                                        <img src={review.logo} alt="" />
                                        <div className="user-info">
                                            <h3>{review.tittle}</h3>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Review