import React from 'react'

import './Contact.css';
import contact from './contact.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
    return (
        <section class="contact" id="Contact" data-aos-duration="2000">
            <h1 class="heading" data-aos="zoom-in-down"> contact <span> now </span> </h1>

            <div class="row" >
                <div class="image" data-aos="zoom-in-down">
                    <img src={contact} alt="" />
                </div>

                <form data-aos="zoom-in-down">
                    <div class="inputBox">
                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="last name" />
                    </div>

                    <div class="inputBox">
                        <input type="email" placeholder="email address" />
                        <input type="number" placeholder="phone" />
                    </div>

                    <textarea placeholder="message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="order now" class="btn" />
                </form>
            </div>
        </section>
    )
}

export default Contact