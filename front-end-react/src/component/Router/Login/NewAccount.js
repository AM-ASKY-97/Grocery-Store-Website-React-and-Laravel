import React, { useState } from 'react'

import './NewAccount.css'
import login from './lo.svg';
import reg from './re.svg';

const NewAccount = () => {

    const [style, setStyle] = useState('container');


    const signUpBtnClick = () => {
        setStyle(style === 'container' ? 'container sign-up-mode' : 'container');
    };

    const signInBtnClick = () => {
        setStyle(style === 'container sign-up-mode' ? 'container' : 'container sign-up-mode');
    }

    return (
        <div className={style}>
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="#" class="sign-in-form form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" class="btn" />
                        <p class="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    <form action="#" class="sign-up-form form">
                        <h2 class="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" class="btn" value="Sign up" />
                        <p class="social-text">Or Sign up with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New Customers</h3>
                        <p>
                            By creating an account with our store. you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
                        </p>
                        <button class="btn transparent" id="sign-up-btn" onClick={signUpBtnClick}>
                            Sign up
                        </button>
                    </div>
                    <img src={login} class="image" alt="" />
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>Registered Customers </h3>
                        <p>
                            If you have an account with us, please login
                        </p>
                        <button class="btn transparent" id="sign-in-btn" onClick={signInBtnClick}>
                            Sign in
                        </button>
                    </div>
                    <img src={reg} class="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewAccount