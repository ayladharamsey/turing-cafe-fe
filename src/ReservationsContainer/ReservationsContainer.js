import React from 'react';
import './ReservationsContainer.css';
import Booking from '../Booking/Booking'


const ReservationsContainer = ({ reservations, removeBooking }) => {
    const booking = reservations.map(reservation => {
        return ( 
            <Booking 
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                key={reservation.id}
                removeBooking={removeBooking}
            />
        )
    })

    return (
        <section> 
            {booking}
        </section>
    )
}

export default ReservationsContainer;