import React from 'react'
import '../Assets/Css/todo.css'
import horse_riding from '../Assets/Images/ToDo/horse_riding.jpg'
import Shravanabelagol from '../Assets/Images/ToDo/Shravanabelagol.jpg'
import microLight from '../Assets/Images/ToDo/micro light.jpg'
import jeepRide from '../Assets/Images/ToDo/jeep ride.jpg'
import Food_Tour from '../Assets/Images/ToDo/Food_Tour.jpg'
import skyDiving from '../Assets/Images/ToDo/sky diving.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/Images/Home/logo.png";

function ToDo() {
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
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">
                                    Contact us
                                </a>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <section id="main-content">
                {/* <!-- Main heading of webpage --> */}
                <h1 id="section-heading">Things to do in Mysuru</h1>
                {/* <!-- heading for each thing to do --> */}
                <h2 class="heading">1. Horse Riding In Mysore</h2>
                <section class="content odd">
                    <div class="image">
                        <img src={horse_riding} alt="Horse Riding" class="place_image" />
                    </div>
                    <div class="details">
                        <p>Experience one of the most ancient mode of transport in the City of Palaces, Mysore which is famous for its Heritage. <br />
                        Either way, the human body improves because of horseback riding. Embark on this amazing 30 minutes long Mysore horse riding activity that will take you through the picturesque environs of the City.<br />
                            Experience a pleasant safari ride, no matter you are inexperienced or experienced ones. On this journey, you will be accompanied by an experienced horseman cum guide who will give you all the information about the history and culture of Mysore.</p>
                    </div>
                </section>
                {/* <!-- heading for each thing to do --> */}
                <h2 class="heading">2. Shravanabelagola And Melukote Tour</h2>
                <section class="content even">
                    <div class="image">
                        <img src={Shravanabelagol} alt="Shravanabelagola And Melukote" class="place_image" />
                    </div>
                    <div class="details">
                        <p>From Shravanabelagola and Melukote Tour, relive the rich history that India holds. With this tour, you flit off to Shravanabelagola. Positioned close to Hassan district, it is a pilgrim destination. The Gommateshvara Bahubali statue here is an architectural marvel and beckons worshippers all across.  Built out of a single rock, the revered sculpture is first of India's 7 ancient wonders.<br />The tour also takes you to Melukote. Located in the Mandya district of Karnataka, it is a sacred destination. The town was formed on craggy hills that oversee the Cauvery Valley. This is the very place where the illustrious Srivaishnava saint Ramanuja stayed for several years during the 12th Century.</p>
                    </div>
                </section>
                {/* <!-- heading for each thing to do --> */}
                <h2 class="heading">3. Mirco Light Flying & Water Sports</h2>
                <section class="content odd">
                    <div class="image">
                        <img src={microLight} alt="Mirco Light Flying & Water Sports" class="place_image" />
                    </div>
                    <div class="details">
                        <p>
                            Get ready to witness the charming aerial views of Mysore in an offbeat way that is surely going to make you astonished. Mirco-Light Flying & Water Sports in Mysore is a 40 minutes aerial ride combo that provides you with stunning views of the entire city. Take part in this one of the most offbeat and amazing ways in Mysore and soar high up in the sky. <br />
                                        With a certified pilot behind the steering, witness the unparalleled sights of the vast horizon. Throughout this ride you will be flying over the city and enjoy stunning aerial views of the entire place.
            </p>
                    </div>
                </section>
                {/* <!-- heading for each thing to do --> */}
                <h2 class="heading">4. Mysore Sightseeing Open Jeep Tour</h2>
                <section class="content even">
                    <div class="image">
                        <img src={jeepRide} alt="Mysore Sightseeing Open Jeep Tour" class="place_image" />
                    </div>
                    <div class="details">
                        <p>Mysore- the “City of Palaces’ is brimmed with the history of its dazzling royal heritage, intricate architecture, and its famed silk sarees. As we all know that the heritage of Mysore is too rich and in exploring it, this open-jeep tour would help you to take a much closer look at everything this beautiful city has to offer. <br />
                                        Book a well-maintained open jeep from your property. An experienced driver which is also a storyteller guide will give you a personalized experience and tell you interesting stories about the places.
            Visit the the best tourist places of Mysuru in an open jeep and enjoy the beauty.</p>
                    </div>
                </section>
                {/* <!-- heading for each thing to do --> */}
                <h2 class="heading">5. Mysore Food Tour</h2>
                <section class="content odd">
                    <div class="image">
                        <img src={Food_Tour} alt="Mysore Food Tour" class="place_image" />
                    </div>
                    <div class="details">
                        <p>Mysore is famous for its rich culture and tasty food. Entice your taste buds with Mysore’s cuisine consisting of innumerable snacks, breakfast delicacies, a wide variety of sweet dishes, the popular Ragi Mudde (dynamite of nutrition) and main course. After this culinary trail, you’ll know that there’s more to Mysore’s food bonanza than just idlis and dosas. <br />Simple, filling meals, unbelievably delicious, and choicest of varieties are available for both vegetarian and non-vegetarian food lovers.End the tour after your sumptuous gastronomic fill. </p>
                    </div>
                </section>
                {/* <!-- heading for each thing to do --> */}
                <h2 class="heading">6. Skydiving In Mysore</h2>
                <section class="content even">
                    <div class="image">
                        <img src={skyDiving} alt="Skydiving In Mysore" class="place_image" />
                    </div>
                    <div class="details">
                        <p>Experience Skydiving that would surely let you gather great views of the entire Mysore from the sky level. Skydiving is a thrilling and exciting sport in which the diver jumps from an airplane from a height. Many adventure enthusiasts from all over the world take up sky diving with passion and enjoy falls from altitude. <br />
                                                With skydive from 10,000 feet, you can experience a free fall at a rate of 120 miles/hour, which will leave you in awe. As the doors open and you drop down, remember to keep your eyes open and relish the most amazing views from high above in the sky. The skydiving in Mysore allows you with a bird's eye view of the city and will let you adore immense beauty.</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ToDo
