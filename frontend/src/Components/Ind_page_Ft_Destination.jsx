import React, { useState } from 'react';
import zoologicalGarden from "../Assets/Images/Home/zoological garden.jpg";
import StarRatingComponent from 'react-star-rating-component';

import pageData from "../Assets/Data/Ind_page_data.js";

function Ft_Destination(props) {
    const [rating, setRating] = useState(0);
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
    }
    const title = props.match.params.title;
    // const data = props.data;
    // console.log(name);
    const data = pageData[title];
    return (
        <div className="container-fluid">
            <div className="row" style={{ marginTop: '72' + 'px', paddingTop: '40' + 'px' }}>
                <div className="col-md-6">
                    <img src={data.src} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6 mt-4 px-4 pt-3" id='rating-container'>
                    <h4 className='text-uppercase'>{title}</h4>
                    <p>{data.text}</p>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={onStarClick}
                    />

                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6">
                    <section className="py-3 text-center">
                        <iframe src={data.map} width='100%' height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                    </section>
                </div>
                <div className="col-md-6">
                    <section className="py-3 text-center">
                        <iframe src={data._3dview} width='100%' height="300" style={{ border: "0" }} aria-hidden="false" tabIndex="0">Your browser doesn't support Map</iframe>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default Ft_Destination
