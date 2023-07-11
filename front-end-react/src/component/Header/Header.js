import React, { useEffect, useState } from 'react'

import './Header.css';
import { CardBank } from './CardBank';
import Navbar from './Navbar/Navbar';

const Header = () => {

    const [navbar, setNavbar] = useState("navbar");
    const [search, setSearch] = useState("search-form");
    const [card, setCard] = useState('shopping-cart');
    const [login, setLogin] = useState('login-form');

    const navToggle = () => {
        setNavbar(navbar === 'navbar' ? 'navbar active' : 'navbar');
        setSearch('search-form');
        setCard('shopping-cart');
        setLogin('login-form');
    };

    const btnSearchClick = () => {
        setSearch(search === 'search-form' ? 'search-form active' : 'search-form');
        setNavbar('navbar');
        setCard('shopping-cart');
        setLogin('login-form');
    }

    const btnCardClick = () => {
        setCard(card === 'shopping-cart' ? 'shopping-cart active' : 'shopping-cart');
        setNavbar('navbar');
        setSearch('search-form');
        setLogin('login-form');
    }

    const btnLogin = () => {
        setLogin(login === 'login-form' ? 'login-form active' : 'login-form');
        setNavbar('navbar');
        setSearch('search-form');
        setCard('shopping-cart');
    }

    useEffect(() => {
        const handleScroll = () => {
            setNavbar('navbar');
            setSearch('search-form');
            setCard('shopping-cart');
            setLogin('login-form');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <a href="#" className="logo"><i className="fas fa-shopping-basket"></i>groco</a>

            <Navbar className={navbar}/>

            <div className="icons">
                <div className="fas fa-bars" id="menu-btn" onClick={navToggle}></div>
                <div className="fas fa-search" id="search-btn" onClick={btnSearchClick}></div>
                <div className="fas fa-shopping-cart" id="card-btn" onClick={btnCardClick}></div>
                <div className="fas fa-user" id="login-btn" onClick={btnLogin}></div>
            </div>

            <form action="" className={search}>
                <input type="search" name="" id="search-box" placeholder="search here.." />
                <label htmlFor="search-box" className="fas fa-search"></label>
            </form>

            <div className={card}>

                {
                    CardBank.map((card) => (
                        <div className="box" key={card.id}>
                            <i className="fas fa-trash"></i>
                            <img src={card.logo} alt="" />
                            <div className="content">
                                <h3>{card.tittle}</h3>
                                <span className="price">Rs. {card.newPrice}/-</span>
                                <span className="quantity">qty : 1</span>
                            </div>
                        </div>
                    ))
                }
                <div className="total">total : Rs. 1500/-</div>
                <a href="" className="btn">checkout</a>
            </div>


            <form action="" className={login}>
                <div className='tittle'>
                    <h3>Login now</h3>
                </div>

                <div className='form-p'>
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email or Phone" required />
                    </div>

                    <div class="row">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div class="pass"><a href="#">Forgot password?</a></div>
                    <div class="row button">
                        <input type="submit" value="Login" />
                    </div>
                    <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
                </div>
            </form>
        </header>
    )
}

export default Header