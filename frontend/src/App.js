import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider } from "react-toast-notifications";

// Components
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Bookings from "./Components/Bookings";
import ToDo from "./Components/ToDo";
import Ind_page_Ft_Destination from "./Components/Ind_page_Ft_Destination";
import Volunteers from "./Components/Volunteers";
import logo from "./Assets/Images/Home/logo.png";

import "./Assets/Css/home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// data
import flights from "./Assets/Data/flight.js";
import hotels from "./Assets/Data/hotels.js";
import pageData from "./Assets/Data/Ind_page_data.js";
import firebase from "firebase";
import { Toast } from "bootstrap";

var firebaseConfig = {
  apiKey: "AIzaSyCi7EGYqr65N0Z15F0aDBGbbk6_rHfxuDw",
  authDomain: "error404-mysuru.firebaseapp.com",
  projectId: "error404-mysuru",
  storageBucket: "error404-mysuru.appspot.com",
  messagingSenderId: "610981807715",
  appId: "1:610981807715:web:c5b948c2e2bd03ec6e1a56",
  measurementId: "G-0K4RE5PBJP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <>
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
          <ToastProvider>
            <Route exact path="/volunteers" component={Volunteers} />
          </ToastProvider>
        </Switch>
      </Router>

      {/* // footer */}
      <footer>
        <section id="main">
          <div id="footer-coloumn1" className="col-lg-4 col-sm-12 coloumn">
            <h5>About Us</h5>
            <p>
              Our mission is to create a trustable platform for travellers and a
              way to connect with the local volunteers to make Mysuru a very
              travellers friendly destination
            </p>
          </div>
          <div id="footer-coloumn2" className="col-lg-4 col-sm-12 coloumn">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="/#destinations">Featured destinations</a>
              </li>
              <li>
                <a href="/#shorcuts">Make Bookings</a>
              </li>
              <li>
                <a href="/covid-dashboard">Covid Cases in Mysuru</a>
              </li>
              <li>
                <a href="/contact-us">Contact us </a>
              </li>
            </ul>
          </div>
          <div id="footer-coloumn3" className="col-lg-4 col-sm-12 coloumn">
            <h5>Contact Us</h5>
            <p>
              <a href="tel:08064744188">Phone : 08064744188</a>
            </p>
            <p>
              <a href="mailto:hello@Mysuru.com">E-mail : hello@Mysuru.com</a>
            </p>
            <div id="social">
              <a href="https://m.facebook.com/CityMysuru/">
                <FontAwesomeIcon icon={faFacebook} className="social-icons" />
              </a>
              <a href="https://mobile.twitter.com/mysurucitycorp">
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </a>
              <a href="https://instagram.com/mysuru?igshid=999xverqra">
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
