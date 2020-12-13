import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import pageData from "../Assets/Data/Ind_page_data.js";
import '../Assets/Css/ind-page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Ft_Destination(props) {
    let [name, setName] = useState('');
    let [review, setReview] = useState('');
    let [oldReviews, setOldReviews] = useState([]);

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
        loadMessages();
    }, [id]);
    // const data = props.data;
    // console.log(name);
    const data = pageData[title];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setName('');
        setReview('');
        try {
            await firebase.database().ref('reviews').child(id).push({
                name: name,
                review: review,
                time: new Date().toLocaleString('en-IN', { hourCycle: 'h24' })
            });
            console.log('review saved');
        } catch (err) {
            if (err) console.log(err.message);
        }
    }

    const loadMessages = async () => {
        try {
            await firebase.database().ref('reviews').child(id).on('value', chats => {
                // console.log(chats.exists());
                // console.log(chats.val());
                if (chats.val() != null) {
                    const values = Object.values(chats.val());
                    console.log('old msgs');
                    setOldReviews(values);
                    // document.getElementById('messages').scrollTo(0, 1000000);
                    // document.getElementById('view').scrollIntoView();
                }
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }
    console.log(oldReviews);

    return (
        <>
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
            <h1 className="heading mb-4">Reviews</h1>
            <div id='review-container' className='py-4'>
                <div className="container mx-auto" >
                    <div>
                        {oldReviews && oldReviews.map(review => <Review key={Math.random()} review={review} />)}
                        <div className="row">
                            <form className='col-md-8 mb-3 mx-auto' id='review-form' onSubmit={handleSubmit}>
                                <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={name} required onChange={e => setName(e.target.value)} />
                                <input type="text" name="review" className="form-control mb-2" placeholder="Review" value={review} required onChange={e => setReview(e.target.value)} />
                                <button className='btn btn-theme btn-block' type='submit'>Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const Review = (props) => {
    let time = props.review.time.split(',')[0];
    return (
        <div className="row no-gutters justify-content-flex-start mt-3 mx-auto">
            <div className="col-10 col-sm-8 mx-auto">
                <div className=" mr-2">
                    {props.review.name}
                </div>
                <div className=" my-2 sent">
                    <div className="message-content">{props.review.review}<small className="float-right">{time}</small></div>
                </div>
            </div>

        </div>
    )

}

export default Ft_Destination
