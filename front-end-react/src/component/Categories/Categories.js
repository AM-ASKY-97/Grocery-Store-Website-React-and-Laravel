import React, { useEffect } from 'react'

import './Categories.css';
import { CategoriesBank } from './CategoriesBank';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();

const Categories = () => {

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
                       
                            <Link to="/products" className='btn'>shop now</Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Categories