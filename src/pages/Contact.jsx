import React from 'react';
import BreadCumb from "../components/menu/BreadCumb";

const Contact = () => {
    return (
        <>
            {/* Breadcrumb Section */}
            <BreadCumb 
                bgimg="/img/bg/breadcumb.jpg" 
                Title="Contact Us" 
            />

            {/* Contact Info Section */}
            <div className="contact-us-section section-padding fix bg-[#f4f1ea]">
                <div className="contact-box-wrapper style1">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"> 
                                        <img src="/img/icon/location.png" alt="Location" width={70} height={70} />
                                    </div>
                                    <h3 className="title">Our Address</h3>
                                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon">
                                        <img src="/img/icon/gmail.png" alt="Email" width={70} height={70} />
                                    </div>
                                    <h3 className="title">info@exmple.com</h3>
                                    <p>Email us anytime for any kind of query.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon">
                                        <img src="/img/icon/phone.png" alt="Phone" width={70} height={70} />
                                    </div>
                                    <h3 className="title">Hot: +208-666-01112</h3>
                                    <p>24/7/365 priority Live Chat and ticketing support.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon">
                                        <img src="/img/icon/clock.png" alt="Clock" width={70} height={70} />
                                    </div>
                                    <h3 className="title">Opening Hour</h3>
                                    <p>Sunday-Fri: 9 AM – 6 PM Saturday: 9 AM – 4 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section section-padding pt-0 fix bg-[#f4f1ea]">
                <div className="contact-form-wrapper style2">
                    <div className="container">
                        <div className="row gx-60 gy-5 ">
                            <div className="col-xl-6">
                                <div className="contact-form-thumb">
                                    <img src="/img/contact/contactThumb2_1.png" alt="Contact Thumb" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-form style2">
                                    <h2>Get in Touch</h2>
                                    <form className="row" action="#">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-md-6">
                                            <select name="orderby" className="single-select" aria-label="Shop order">
                                                <option value="subject">Subject</option>
                                                <option value="complain">Complain</option>
                                                <option value="greetings">Greetings</option>
                                                <option value="date">Expire Date</option>
                                                <option value="price">About Price</option>
                                                <option value="order">About order</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea id="message" className="form-control" placeholder="Write your message here..." rows="5"></textarea>
                                        </div>
                                        
                                        <div className="col-12 form-group mb-0">
                                            <button className="theme-btn w-100">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-wrapper contact-area-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d548.5070758756087!2d91.83799738014133!3d22.357364007253732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1765654337026!5m2!1sen!2sbd"
                    height="550" 
                    loading="lazy"
                    title="map"
                    style={{ border: 0, width: "100%" }}
                ></iframe>
            </div>            
        </>
    );
};

export default Contact;