import React from 'react'

import './Feature.css';

import { FeatureBank } from './FeatureBank';

const Feature = () => {
    return (
        <section className="features" id="feature">
            <h1 className="heading">our <span>features</span></h1>

            <div className="box-container">
                {
                    FeatureBank.map((Feature) => (
                        <div className="box" key={Feature.id}>
                            <img src={Feature.logo} alt="" />
                            <h3>{Feature.tittle}</h3>
                            <p>{Feature.para}</p>
                            <a href="" className="btn">read more</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Feature