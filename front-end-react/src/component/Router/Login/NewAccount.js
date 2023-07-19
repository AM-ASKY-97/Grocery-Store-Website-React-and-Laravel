import React, { useState } from 'react'

import './NewAccount.css'
import login from './lo.svg';
import reg from './re.svg';
import Swal from 'sweetalert2'

const NewAccount = () => {

    const [style, setStyle] = useState('container');


    const signUpBtnClick = () => {
        setStyle(style === 'container' ? 'container sign-up-mode' : 'container');
    };

    const signInBtnClick = () => {
        setStyle(style === 'container sign-up-mode' ? 'container' : 'container sign-up-mode');
    }

    const btnClick = () => {
        Swal.fire({
            icon: 'info',
            text: 'This application is currently under development and will soon be released in its full version',
            footer: 'Thanks for visiting'
        })
    }

    return (
        <div className={style}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="button" value="Login" className="btn" onClick={btnClick}/>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="button" className="btn" value="Sign up" onClick={btnClick}/>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New Customers</h3>
                        <p>
                            By creating an account with our store. you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={signUpBtnClick}>
                            Sign up
                        </button>
                    </div>
                    <img src={login} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Registered Customers </h3>
                        <p>
                            If you have an account with us, please login
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={signInBtnClick}>
                            Sign in
                        </button>
                    </div>
                    <img src={reg} className="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewAccount