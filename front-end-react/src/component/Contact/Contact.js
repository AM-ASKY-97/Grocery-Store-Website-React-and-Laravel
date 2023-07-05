import React from 'react'

import './Contact.css';
import contact from './contact.svg';

const Contact = () => {
    return (
        <section class="contact" id="conatct">
            <h1 class="heading"> contact <span> now </span> </h1>

            <div class="row">
                <div class="image">
                    <img src={contact} alt="" />
                </div>

                <form>
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