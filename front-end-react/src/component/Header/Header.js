import React, { useEffect, useState } from 'react'

import './Header.css';

const Header = () => {

    const [active, setActive] = useState("navbar");

    const navToggle = () => {
        setActive(active === 'navbar' ? 'navbar active' : 'navbar');
    };

    useEffect(() => {
        const handleScroll = () => {
            setActive('navbar');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <a href="#" className="logo"><i className="fas fa-shopping-basket"></i>groco</a>

            <nav className={active}>
                <a href="#home">home</a>
                <a href="#feature">features</a>
                <a href="#products">products</a>
                <a href="#categories">categories</a>
                <a href="#review">review</a>
                <a href="#blog">Blog</a>
                <a href="#conatct">Contact</a>
            </nav>

            <div className="icons">
                <div className="fas fa-bars" id="menu-btn" onClick={navToggle}></div>
                <div className="fas fa-search" id="search-btn"></div>
                <div className="fas fa-shopping-cart" id="card-btn"></div>
                <div className="fas fa-user" id="login-btn"></div>
            </div>

            <form action="" className="search-form">
                <input type="search" name="" id="search-box" placeholder="search here.." />
                <label htmlFor="search-box" className="fas fa-search"></label>
            </form>

            <div className="shopping-cart">
                <div className="box">
                    <i className="fas fa-trash"></i>
                    <img src="imgaes/card-img-1.png" alt="" />
                    <div className="content">
                        <h3>watermelon</h3>
                        <span className="price">Rs. 350/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-trash"></i>
                    <img src="imgaes/card-img-1.png" alt="" />
                    <div className="content">
                        <h3>watermelon</h3>
                        <span className="price">Rs. 350/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
                </div>

                <div className="box">
                    <i className="fas fa-trash"></i>
                    <img src="imgaes/card-img-1.png" alt="" />
                    <div className="content">
                        <h3>watermelon</h3>
                        <span className="price">Rs. 350/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
                </div>

                <div className="total">total : Rs. 1500/-</div>
                <a href="" className="btn">checkout</a>
            </div>
        </header>
    )
}

export default Header