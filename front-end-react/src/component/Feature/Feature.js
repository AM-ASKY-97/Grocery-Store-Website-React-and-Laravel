import React from 'react'

import './Feature.css';
import { FeatureBank } from './FeatureBank';
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Feature = () => {

    const btnClik = () => {
        Swal.fire({
            icon: 'info',
            text: 'This application is currently under development and will soon be released in its full version',
            footer: 'Thanks for visiting'
        })
    }

    return (
        <section className="features" id="Features">
            <h1 className="heading" data-aos-duration="2000" data-aos="zoom-in-down">our <span>features</span></h1>

            <div className="box-container">
                {
                    FeatureBank.map((Feature) => (
                        <div className="box" key={Feature.id} data-aos-duration="2000" data-aos={Feature.Animation}>
                            <img src={Feature.logo} alt="" />
                            <h3>{Feature.tittle}</h3>
                            <p>{Feature.para}</p>
                            {/*<a href="" className="btn">read more</a>*/}
                            <button className='btn' onClick={btnClik}>read more</button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Feature