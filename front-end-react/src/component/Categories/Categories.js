import React, { useEffect } from 'react'

import './Categories.css';
import { CategoriesBank } from './CategoriesBank';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

AOS.init();

const Categories = () => {

    const btnClick = () => {
        Swal.fire({
            icon: 'info',
            text: 'This application is currently under development and will soon be released in its full version',
            footer: 'Thanks for visiting'
        })
    }

    return (
        <section className="categories" id="Categories">
            <h1 className="heading" data-aos-duration="2000" data-aos="zoom-in-down">product <span>categories</span></h1>

            <div className="box-container">
                {
                    CategoriesBank.map((categories) => (
                        <div className="box" key={categories.id} data-aos-duration="2000" data-aos={categories.Animation}>
                            <img src={categories.logo} alt="" />
                            <h3>{categories.tittle}</h3>
                            <p>{categories.para}</p>

                            <Link className='btn' onClick={btnClick}>shop now</Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Categories