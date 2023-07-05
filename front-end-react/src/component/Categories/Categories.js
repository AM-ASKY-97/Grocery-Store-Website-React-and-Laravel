import React from 'react'

import './Categories.css';
import { CategoriesBank } from './CategoriesBank';


const Categories = () => {
    return (
        <section className="categories" id="categories">
            <h1 className="heading">product <span>categories</span></h1>

            <div className="box-container">
                {
                    CategoriesBank.map((categories) => (
                        <div className="box" key={categories.id}>
                            <img src={categories.logo} alt="" />
                            <h3>{categories.tittle}</h3>
                            <p>{categories.para}</p>
                            <a href="" className="btn">shop now</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Categories