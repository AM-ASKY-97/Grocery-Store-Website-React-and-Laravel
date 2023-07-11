import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Product.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';
import Swal from 'sweetalert2'

import { ProductsBank } from './ProductsBank';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Products = () => {

    const btnClick = () => {
        Swal.fire({
            icon: 'info',
            text: 'This application is currently under development and will soon be released in its full version',
            footer: 'Thanks for visiting'
        })
    }

    return (
        <>
            <section className="products" id="Products" data-aos-duration="2000" data-aos="zoom-in-down">
                <h1 className="heading">
                    our <span>products</span>
                </h1>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    loop={true}
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
                                        <button class="btn a" onClick={btnClick}>add to cart</button>
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
