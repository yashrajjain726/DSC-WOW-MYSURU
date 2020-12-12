import React from 'react'
import './Card_Bookings'
import '../Assets/Css/bookings.css'
import Card_Bookings from './Card_Bookings'
const Bookings = (props) => {
    return (
        <>
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