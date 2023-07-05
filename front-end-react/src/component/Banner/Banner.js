import React from 'react'

import './Banner.css';
import { BannerBank } from './BannerBank';

const Banner = () => {
    return (
        <section className="banner-container" id="banner">
            {
                BannerBank.map((banner) => (
                    <div className="banner" key={banner.id}>
                        <img src={banner.logo} alt="" />
                        <div className="content">
                            <span>{banner.para}</span>
                            <h3>{banner.tittle}</h3>
                            <a href="#" className="btn">shop now</a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Banner