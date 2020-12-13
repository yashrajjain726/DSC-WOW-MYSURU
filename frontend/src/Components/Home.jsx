import React, { useEffect } from 'react'
import '../Assets/Css/home.css'
import slide1 from '../Assets/Images/Home/slide1.jpg'
import slide2 from '../Assets/Images/Home/slide2.jpg'
import slide3 from '../Assets/Images/Home/slide3.jpg'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/Images/Home/logo.png";

// images
import flight from '../Assets/Images/Home/flight.jpg'
import hotel from '../Assets/Images/Home/hotel.jpg'
import mustDo from '../Assets/Images/Home/mustdo.jpg'

// data
import FeaturedDestinations from '../Assets/Data/FeturedDestinations.js';

// ft. destination card
import Card_Ft_Destination from '../Components/Card_Ft_Destination'

import firebase from 'firebase/app'
import 'firebase/firestore'

function Home() {

    useEffect(() => {
        firebase.firestore().collection('rating').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                sessionStorage.setItem(`${doc.data().id + '_count'}`, `${doc.data().count}`);
                sessionStorage.setItem(`${doc.data().id + '_user'}`, `${doc.data().user}`);
                console.log(`${doc.data().id + '_count'}`);
                console.log(`${doc.data().count}`);
                console.log(`${doc.data().id + '_user'}`);
                console.log(`${doc.data().user}`);

            });
        })
    }, [])
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
            <Carousel>
                <Carousel.Item>
                    <img src={slide1} className="d-block w-100" id="img1" alt="Notes" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Scenic Beauty</h5>
                        <p className="animate__animated animate__fadeIn">Want to Witness the Most beautiful tourist locations of India? Don't Wait Visit Mysuru today</p>
                        <p className="animate__animated animate__fadeInUp"><a href="/#destinations">Explore now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} className="d-block w-100" id="img2" alt="Events" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Volunteers of Mysuru</h5>
                        <p className="animate__animated animate__fadeIn">Want to connect with the group of hard working and experienced volunteers of Mysuru?
Get connected with them easily</p>
                        <p className="animate__animated animate__fadeInUp"><a href='/volunteers'>Connect now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} className="d-block w-100" id="img3" alt="Notice" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Make yout plans</h5>
                        <p className="animate__animated animate__fadeIn">Want to visit mysuru but haven't made your plans?
Make you tour interesting with our help. Make your plans now</p>
                        <p className="animate__animated animate__fadeInUp"><a href="/#shorcuts">Let's go</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section id="destinations">
                <h1 className="section-heading">Featured Destinations </h1>
                <div className="row mx-auto pb-3">
                    {
                        FeaturedDestinations.map(data => {
                            return (
                                <Card_Ft_Destination data={data} />
                            )
                        })
                    }
                </div>
            </section>
            <section id="video" className='mt-3'>
                <h1 className="section-heading">Mysuru at a glance </h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5E4BtByzQic" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <section id="shorcuts">
                <h1 className="section-heading explore">Make Your plans</h1>
                <div className="card-deck">
                    <div className="card">
                        <a href="/book-flights" className="card-link">
                            <img src={flight} className="card-img-top" alt="Flight" />
                            <span>Book Flight </span>
                        </a>
                    </div>
                    <div className="card">
                        <a href="/book-hotels" className="card-link">
                            <img src={hotel} className="card-img-top" alt="Hotel" />
                            <span>Book Hotels </span>
                        </a>
                    </div>
                    <div className="card">
                        <a href="/todo-in-mysuru" className="card-link">
                            <img src={mustDo} className="card-img-top" alt="ToDo" />
                            <span>Must do in Mysuru </span>
                        </a>
                    </div>
                </div>
            </section>
            <section id="book">
                <p>Want to learn more?</p>
                <a href="https://twitter.com/hashtag/mysuru?lang=en" target='_blank' rel='noopener noreferrer'><button>Explore #Mysuru </button></a>
            </section>
        </>
    )
}

export default Home