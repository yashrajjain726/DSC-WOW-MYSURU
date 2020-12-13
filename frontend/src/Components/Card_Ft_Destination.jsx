import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Card_Ft_Destination(props) {

    const title = props.data.cardTitle;
    const id = title.replace(/\s+/g, "");
    let count = sessionStorage.getItem(`${id + '_count'}`);
    let user = sessionStorage.getItem(`${id + '_user'}`);
    let rating = Math.round(count / user);

    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto mt-3">
            <div className="card">
                <a href={`/featured-destination/${props.data.cardTitle}`} className="card-link">
                    <img src={props.data.src} className="card-img-top" alt={props.data.cardTitle} />
                    <div className="card-body pb-0" id="rating-container">
                        <h5 className="card-title">{props.data.cardTitle}</h5>
                        <div className="row">
                            <div className="col-8">
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating}
                                    editing={false}
                                />
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faUser} className='mt-3 mr-1' /><span>{user}</span>
                            </div>
                        </div>

                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card_Ft_Destination