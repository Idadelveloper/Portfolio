import React from 'react'
import './MyContact.css'
import contactImage from '../assets/3d-center-purple.png'

export default function MyContact() {
    return (
        <div>
            <div className="">
                <div className="contact">
                    <h1 className="about-title">Contact</h1>
                    <div className="contact-circle1"></div>
                    <div className="contact-circle2"></div>
                    <div className="contact-form">
                        <form action="" className="form">
                            <div className="name">
                                {/* <label htmlFor="firstName">First Name</label> */}
                                <input type="text" name="firstName" className="firstName mt-4" placeholder="First Name" tabIndex="1" required />

                                {/* <label htmlFor="lastName">Last Name</label> */}
                                <input type="text" name="lastName" className="lastName" placeholder="Last Name" tabIndex="2" />

                                {/* <label htmlFor="email">Email</label> */}
                                <input type="email" name="email" id="email" className="email" placeholder="Email" tabIndex="3" required />

                                {/* <label htmlFor="message">Message</label> */}
                                <textarea name="message" id="message" placeholder="Message" cols="30" rows="10" required></textarea>

                                <button type="submit" className="send mb-4">Send</button>
                            </div>
                        </form>
                        <div className="contact-image">
                            <img src={contactImage} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}