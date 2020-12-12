import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import firebase from 'firebase/app'
import 'firebase/firestore'
import pageData from "../Assets/Data/Ind_page_data.js";

function Ft_Destination(props) {
    const [rating, setRating] = useState(0);
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
        // save();
        firebase.firestore().collection('rating').doc(id).set({
            id: id,
            count: count + nextValue,
            user: user + 1
        }).then(() => {
            console.log(user);
            sessionStorage.setItem(`${id + '_user'}`, `${user + 1}`);
            sessionStorage.setItem(`${id + '_count'}`, `${count + nextValue}`);

            console.log('saved')
        })
            .catch(err => console.log(err));
    }
    const title = props.match.params.title;
    const id = title.replace(/\s+/g, "");
    let count = Number(sessionStorage.getItem(`${id + '_count'}`));

    let user = Number(sessionStorage.getItem(`${id + '_user'}`));
    console.log(user);
    console.log(count);
    // function save() {

    // }
    useEffect(() => {
        console.log(title.replace(/\s+/g, ""));
    }, []);
    // const data = props.data;
    // console.log(name);
    const data = pageData[title];
    return (
        <div className="container-fluid" style={{ marginTop: '62' + 'px', paddingTop: '20' + 'px' }}>
            <h1 className="heading mb-4">Featured Destinations</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={data.src} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6 mt-4 mt-md-0 px-4 pt-3" id='rating-container'>
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
