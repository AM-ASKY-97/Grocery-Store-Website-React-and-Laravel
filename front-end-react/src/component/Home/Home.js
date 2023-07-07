import React from 'react'

import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <section className="home" id="home" data-aos-duration="2000" data-aos="zoom-in-down">
            <div className="content">
                <h3>buy best <span> organic product </span> online </h3>
                <a href="#banner" className="btn"> get yours now </a>
            </div>
        </section>
    )
}

export default Home