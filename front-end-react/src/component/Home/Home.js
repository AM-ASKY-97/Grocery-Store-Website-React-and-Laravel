import React from 'react'

import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <section className="home" id="Home">
            <div className="content">
                <h3>buy best <span> organic product </span> online </h3>
       
                <Link to="banner" smooth={true} offset={-70} duration={500} className='btn'>get yours now</Link>
            </div>
        </section>
    )
}

export default Home