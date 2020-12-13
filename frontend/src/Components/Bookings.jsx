import React from 'react'
import './Card_Bookings'
import '../Assets/Css/bookings.css'
import Card_Bookings from './Card_Bookings'
// nav
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/Images/Home/logo.png";

const Bookings = (props) => {
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
                            <li className="nav-item active">
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
            <h1 className="section-heading" style={{ marginTop: '80px' }}>Best Deals </h1>
            <div className='container mb-5'>
                <div className="row mx-auto">
                    {
                        props.data.map(data => {
                            return (
                                <Card_Bookings data={data} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Bookings;