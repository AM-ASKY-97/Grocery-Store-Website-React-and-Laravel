import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Product.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';

import { ProductsBank } from './ProductsBank';

const Products = () => {
    return (
        <>
            <section className="products" id="products">
                <h1 className="heading">
                    our <span>products</span>
                </h1>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    autoplay={{
                        delay: 4500,
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
                            slidesPerView: 4,
                        },
                    }}

                >

                    {
                        ProductsBank.map((products) => (
                            <SwiperSlide key={products.id}>
                                <div className='product-slider'>
                                    <div class="swiper-slide box">

                                        <span class="discount">{products.discount}</span>

                                        <div class="icons">
                                            <a href="#" class="fas fa-heart"></a>
                                            <a href="#" class="fas fa-share"></a>
                                            <a href="#" class="fas fa-eye"></a>
                                        </div>

                                        <img src={products.logo} alt="" />
                                        <h3>{products.tittle}</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>

                                        <div class="price">LKR {products.newPrice} <span>LKR {products.oldPrice}</span></div>
                                        <div class="quantity">
                                            <span>quantity : </span>
                                            <input type="number" name="" min="1" max="1000" value="1" id="" />
                                            <span> /kg</span>
                                        </div>
                                        <a href="#" class="btn">add to cart</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </>
    );
}

export default Products;
