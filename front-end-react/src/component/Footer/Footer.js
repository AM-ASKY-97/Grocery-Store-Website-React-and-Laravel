import React from 'react'

import './Footer.css';

const Footer = () => {
    return (
        <section class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>Geroco <i class="fas fa-shopping-basket"></i></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo animi, officiis quo, in
                        nostrum tempora non quibusdam molestias dolorem repellat blanditiis tenetur facere incidunt dolore
                        qui porro dolor. Eum?</p>
                    <div class="share">
                        <a href="https://www.facebook.com/mohammed.asky.9" class="fab fa-facebook-f"></a>
                        <a href="https://www.youtube.com/channel/UC5YJmG0NFNyZaZsvyGcQAWQ" class="fab fa-youtube"></a>
                        <a href="https://www.linkedin.com/in/asky-mohammed-02742921b/" class=" fab fa-linkedin"></a>
                        <a href="https://github.com/AM-ASKY-97" class="fab fa-github"></a>
                    </div>
                </div>

                <div class="box">
                    <h3>contact info</h3>
                    <a href="" class="links"><i class="fas fa-phone"></i>+94775311974</a>
                    <a href="" class="links"><i class="fas fa-phone"></i>+94751311974</a>
                    <a href="" class="links"><i class="fas fa-envelope"></i>am.asky97@gmail.com</a>
                    <a href="" class="links"><i class="fas fa-map-marker-alt"></i>Sri lanka, sammanthurai</a>
                </div>


                <div class="box">
                    <h3>quick links</h3>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Home</a>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Features</a>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Products</a>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Categories</a>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Review</a>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Blog</a>
                    <a href="" class="links"><i class="fas fa-arrow-right"></i>Contact</a>
                </div>


                <div class="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <input type="email" name="" id="" placeholder="your email" class="email" />
                    <input type="submit" value="subscribe" class="btn" /><br />
                    <img src="./imgaes/payment (2).png" class="payment-img" alt="" />
                </div>
            </div>


            <div class="credit">Created By <span><a href="https://am-asky-97.github.io/portfolio/">Asky AM</a></span> | ©
                2022 All rights reserved.
            </div>
        </section>
    )
}

export default Footer