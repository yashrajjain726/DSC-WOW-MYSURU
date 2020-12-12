import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Bookings from "./Components/Bookings";
import ToDo from "./Components/ToDo";
import Ind_page_Ft_Destination from "./Components/Ind_page_Ft_Destination";

import "./Assets/Css/home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";

import logo from "./Assets/Images/Home/logo.png";

// data
import flights from "./Assets/Data/flight.js";
import hotels from "./Assets/Data/hotels.js";
import pageData from "./Assets/Data/Ind_page_data.js";

function App() {
  console.log(flights);
  return (
    <>
      {/* // nav  */}
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
                <a className="nav-link" href="/contact-us">
                  Contact us
                </a>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* // routers */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/covid-dashboard" component={Dashboard} />
          <Route exact path="/book-hotels">
            <Bookings data={hotels} />
          </Route>
          <Route exact path="/book-flights">
            <Bookings data={flights} />
          </Route>
          <Route exact path="/todo-in-mysuru" component={ToDo} />
          <Route
            exact
            path="/featured-destination/:title"
            component={Ind_page_Ft_Destination}
          />
        </Switch>
      </Router>

      {/* // footer */}
      <footer>
        <section id="main">
          <div id="footer-coloumn1" class="col-lg-4 col-sm-12 coloumn">
            <h5>About Us</h5>
            <p>
              Our mission is to create a trustable platform for travellers and a
              way to connect with the local volunteers to make Mysuru a very
              travellers friendly destination
            </p>
          </div>
          <div id="footer-coloumn2" class="col-lg-4 col-sm-12 coloumn">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#destinations">Featured destinations</a>
              </li>
              <li>
                <a href="#shorcuts">Make Bookings</a>
              </li>
              <li>
                <a href="#">Covid Cases in Mysuru</a>
              </li>
              <li>
                <a href="#">Contact us </a>
              </li>
            </ul>
          </div>
          <div id="footer-coloumn3" class="col-lg-4 col-sm-12 coloumn">
            <h5>Contact Us</h5>
            <p>Phone : 08064744188</p>
            <p>Phone : 08064744188</p>
            <p>E-mail : hello@Mysuru.com</p>
            <div id="social">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="social-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="social-icons" />
              </a>
            </div>
          </div>
        </section>
        <section id="copyright">
          <p>&copy; 2020 Error 404</p>
        </section>
      </footer>
    </>
  );
}

export default App;
