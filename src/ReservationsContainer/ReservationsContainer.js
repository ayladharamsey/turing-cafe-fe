import React from 'react';
import './ReservationsContainer.css';
import Booking from '../Booking/Booking'


const ReservationsContainer = ({ reservations, removeBooking }) => {
    console.log(reservations)
    const potato = reservations.map(reservation => {

        return ( 
            <Booking 
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                numGuests={reservation.numGuests}
                key={reservation.id}
                removeBooking={removeBooking}
            />
        )
    })

    return (
        <section> 
            {potato}
        </section>
    )
}

export default ReservationsContainer;