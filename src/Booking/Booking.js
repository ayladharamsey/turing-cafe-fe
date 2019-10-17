import React from 'react'
import './Booking.css'

const Booking = ({ id, name, date, time, number, removeBooking }) => {

    return (
        <article>
            <h3>Name: <span> {name} </span></h3>
            <h3> Date: <span> {date} </span></h3>
            <h3> Time: <span> {time} </span></h3>
            <h3> Number of Guests: <span> {number} </span></h3>
            <button onClick={() => removeBooking(id)}> Delete </button>
        </article>
    )
}

export default Booking;