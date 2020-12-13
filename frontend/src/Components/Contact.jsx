import React from 'react'
import '../Assets/Css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

// nav
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/Images/Home/logo.png";

function Contact() {
    return (
        <>
            <Navbar className="fixed-top" expand="lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Mysuru logo" />
                    </a>
                    <Navbar.Toggle aria-controls="navbarSupportedContent">
                        <FontAwesomeIcon icon={faBars} className="nav-toggler" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#destinations">
                                    Featured destinations
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/covid-dashboard">
                                    Covid Cases
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#shorcuts">
                                    Make plans
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/volunteers">
                                    Volunteers
                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/contact-us">
                                    Contact us
                </a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <section id="contact" className="container">
                <h1>Contact us</h1>
                <div id="main">
                    <section id="map" className="pt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124738.44715982598!2d76.5656492516725!3d12.310636832253756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1607610152574!5m2!1sen!2sin" width="400" height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                    </section>
                    <section id="details">
                        <h2>Having Queries? </h2>
                        <p>Are You planning your Mysuru trip? Do having some Queries? No problem, we are always ready to help you out. Feel free to contact us.</p>
                        <h2>Reach us at</h2>
                        <p><a href="tel:+918113445678">Phone: +91 811 344 5678</a></p>
                        <p><a href="tel:+916523412365">Phone: +91 652 341 2365</a></p>
                        <p><a href="mailto:namaste@mysuru.org" id="mail">E-mail: namaste@mysuru.org</a></p>
                        <h2>Connect with us</h2>
                        <div id="social">
                            <a href="https://m.facebook.com/CityMysuru/"><FontAwesomeIcon icon={faFacebook} className="social-icons" /></a>
                            <a href="https://mobile.twitter.com/mysurucitycorp"><FontAwesomeIcon icon={faTwitter} className="social-icons" /></a>
                            <a href="https://instagram.com/mysuru?igshid=999xverqra"><FontAwesomeIcon icon={faInstagram} className="social-icons" /></a>
                        </div >
                    </section >
                </div >
            </section >
        </>
    )
}

export default Contact