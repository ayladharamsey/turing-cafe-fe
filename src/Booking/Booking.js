import React from 'react'
import './Booking.css'

const Booking = ({ name, date, time, numGuests, removeBooking }) => {

    return (
        <article>
            <h3>Name <span> {name} </span></h3>
            <h3> Date <span> {date} </span></h3>
            <h3> Time <span> {time} </span></h3>
            <h3> numGuests <span> {numGuests} </span></h3>
            <button onClick={removeBooking}> Delete </button>
        </article>
    )
}

export default Booking;