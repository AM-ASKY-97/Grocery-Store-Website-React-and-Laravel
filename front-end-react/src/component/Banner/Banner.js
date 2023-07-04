import React from 'react'

import './Banner.css';

import Banner1 from './images/banner1.png';
import Banner2 from './images/banner2.png';
import Banner3 from './images/banner3.png';

const Banner = () => {
    return (
        <section className="banner-container" id="banner">

            <div className="banner">
                <img src={Banner1} alt="" />
                <div className="content">
                    <span>limited sales</span>
                    <h3>Vegetables</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

            <div className="banner">
                <img src={Banner2} alt="" />
                <div className="content">
                    <span>limited sales</span>
                    <h3>fruits</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

            <div className="banner">
                <img src={Banner3} alt="" />
                <div className="content">
                    <span>limited sales</span>
                    <h3>assorted</h3>
                    <a href="#" className="btn">shop now</a>
                </div>
            </div>

        </section>
    )
}

export default Banner