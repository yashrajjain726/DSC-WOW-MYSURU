import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

function Card_Ft_Destination(props) {
    const [rating, setRating] = useState(0);
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
    }
    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto mt-3">
            <div class="card">
                <a href={`/featured-destination/${props.data.cardTitle}`} class="card-link">
                    <img src={props.data.src} class="card-img-top" alt={props.data.cardTitle} />
                    <div class="card-body pb-0" id="rating-container">
                        <h5 class="card-title">{props.data.cardTitle}</h5>
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={rating}
                            onStarClick={onStarClick}
                            editing={false}
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card_Ft_Destination