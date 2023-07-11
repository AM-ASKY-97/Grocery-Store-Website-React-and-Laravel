import React from 'react'

import './Banner.css';
import { BannerBank } from './BannerBank';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
// ..
AOS.init();

const Banner = () => {

    const btnClik = () => {
        Swal.fire({
            icon: 'info',
            text: 'This application is currently under development and will soon be released in its full version',
            footer: 'Thanks for visiting'
        })
    }

    return (
        <section className="banner-container" id="banner">
            {
                BannerBank.map((banner) => (
                    <div className="banner" key={banner.id} data-aos-duration="2000" data-aos={banner.Animation}>
                        <img src={banner.logo} alt="" />
                        <div className="content">
                            <span>{banner.para}</span>
                            <h3>{banner.tittle}</h3>
                            {/*<Link to='/products' className="btn">shop now</Link>*/}
                            <button className="btn" onClick={btnClik}>shop now</button>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Banner