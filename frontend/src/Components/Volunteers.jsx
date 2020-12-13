import React from 'react'

// images
import volunteer1 from "../Assets/Images/Volunteers/volunteer1.jpg";
import volunteer2 from "../Assets/Images/Volunteers/volunteer2.jpg";
import volunteer3 from "../Assets/Images/Volunteers/volunteer3.jpg";
import volunteer4 from "../Assets/Images/Volunteers/volunteer4.jpg";
import volunteer5 from "../Assets/Images/Volunteers/volunteer5.jpg";
import volunteer6 from "../Assets/Images/Volunteers/volunteer6.jpg";

import '../Assets/Css/volunteers.css'


// nav
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/Images/Home/logo.png";

function Volunteers() {
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
                            <li className="nav-item active">
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
                            <li className="nav-item active">
                                <a className="nav-link" href="/volunteers">
                                    Volunteers
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">
                                    Contact us
                </a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <section id="volunteers">
                <h1 className="section-heading">Volunteers of Mysuru  </h1>
                <div className="card-deck">
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={volunteer1} className="card-img-top" alt="volunteer" />
                            <div className="card-body">
                                <h5 className="card-title">Snehasish Pati </h5>
                                <p className="card-text">Ph: +91 811 344 5678 <br />volunteer@mysuru.org</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={volunteer2} className="card-img-top" alt="volunteer" />
                            <div className="card-body">
                                <h5 className="card-title">Atman Das</h5>
                                <p className="card-text">Ph: +91 811 344 5678 <br />volunteer@mysuru.org</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={volunteer3} className="card-img-top" alt="volunteer" />
                            <div className="card-body">
                                <h5 className="card-title">Yashraj Jain </h5>
                                <p className="card-text">Ph: +91 811 344 5678 <br />volunteer@mysuru.org</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={volunteer4} className="card-img-top" alt="volunteer" />
                            <div className="card-body">
                                <h5 className="card-title"> Sara                                                        </h5>
                                <p className="card-text">Ph: +91 811 344 5678 <br />volunteer@mysuru.org</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={volunteer5} className="card-img-top" alt="volunteer" />
                            <div className="card-body">
                                <h5 className="card-title">Sonakshi </h5>
                                <p className="card-text">Ph: +91 811 344 5678 <br />volunteer@mysuru.org</p>
                            </div>
                        </a>
                    </div>
                    <div className="card">
                        <a href="#" className="card-link">
                            <img src={volunteer6} className="card-img-top" alt="volunteer" />
                            <div className="card-body">
                                <h5 className="card-title">Robert </h5>
                                <p className="card-text">Ph: +91 811 344 5678 <br />volunteer@mysuru.org</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section id="Register">
                <h1 className="section-heading">Register as a Volunteer</h1>
                <form action="#" method="post">
                    <div id="info">
                        <h5>To register yourself as a volunteer, fill this form</h5>
                    </div>
                    <div className="input">
                        <label className="label-for-input">
                            <span>Name:</span>
                            <input type="text" name="name" required placeholder="Your name" />
                        </label>
                    </div>
                    <div className="input">
                        <label className="label-for-input">
                            <span>E-mail:</span>
                            <input type="email" name="email" required placeholder="Your email" />
                        </label>
                    </div>
                    <div className="input">
                        <label className="label-for-input">
                            <span>Phone:</span>
                            <input type="tel" name="phone" required placeholder="Your Phone no" />
                        </label>
                    </div>
                    <div className="input">
                        <label className="label-for-input">
                            <span>Age:</span>
                            <input type="number" name="age" required min="1" max="120" placeholder="Your age" />
                        </label>
                    </div>
                    <div className="input">
                        <label className="label-for-input radio-input">
                            <span>Gender:</span>
                            <div>
                                <label className="radio"><input type="radio" name="gender" value="Male" required /><span>Male </span></label>
                                <label className="radio"><input type="radio" name="gender" value="Female" required /><span>Female </span></label>
                            </div>
                        </label>
                    </div>
                    <div id="submit">
                        <input type="submit" value="REGISTER " />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Volunteers
