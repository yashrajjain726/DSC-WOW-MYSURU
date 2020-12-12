import React from 'react'
import '../Assets/Css/home.css'
import slide1 from '../Assets/Images/Home/slide1.jpg'
import slide2 from '../Assets/Images/Home/slide2.jpg'
import slide3 from '../Assets/Images/Home/slide3.jpg'
import { Carousel } from 'react-bootstrap'

// images
import flight from '../Assets/Images/Home/flight.jpg'
import hotel from '../Assets/Images/Home/hotel.jpg'
import mustDo from '../Assets/Images/Home/mustdo.jpg'

// data
import FeaturedDestinations from '../Assets/Data/FeturedDestinations.js';

// ft. destination card
import Card_Ft_Destination from '../Components/Card_Ft_Destination'

function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src={slide1} className="d-block w-100" id="img1" alt="Notes" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Scenic Beauty</h5>
                        <p className="animate__animated animate__fadeIn"></p>
                        <p className="animate__animated animate__fadeInUp"><a href="/appointment">Explore now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} className="d-block w-100" id="img2" alt="Events" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Tourist Satisfaction  </h5>
                        <p className="animate__animated animate__fadeIn"></p>
                        <p className="animate__animated animate__fadeInUp"><a>Explore now</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} className="d-block w-100" id="img3" alt="Notice" />
                    <Carousel.Caption>
                        <h5 className="animate__animated animate__fadeInDown">Explore Nature</h5>
                        <p className="animate__animated animate__fadeIn"></p>
                        <p className="animate__animated animate__fadeInUp"><a href="#products">Let's go</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section id="destinations">
                <h1 class="section-heading">Featured Destinations </h1>
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
                <h1 class="section-heading">Mysuru at a glance </h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5E4BtByzQic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section id="shorcuts">
                <h1 class="section-heading explore">Make Your plans</h1>
                <div class="card-deck">
                    <div class="card">
                        <a href="#" class="card-link">
                            <img src={flight} class="card-img-top" alt="Flight" />
                            <span>Book Flight </span>
                        </a>
                    </div>
                    <div class="card">
                        <a href="#" class="card-link">
                            <img src={hotel} class="card-img-top" alt="Hotel" />
                            <span>Book Hotels </span>
                        </a>
                    </div>
                    <div class="card">
                        <a href="/todo-in-mysuru" class="card-link">
                            <img src={mustDo} class="card-img-top" alt="ToDo" />
                            <span>Must do in Mysuru </span>
                        </a>
                    </div>
                </div>
            </section>
            <section id="book">
                <p>Want to learn more?</p>
                <a href=""><button>Explore #Mysuru </button></a>
            </section>
        </>
    )
}

export default Home