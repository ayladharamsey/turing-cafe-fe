import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0,
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const { addBooking } = this.props
        const newBooking = {...this.state}
        addBooking(newBooking);
        this.resetInputs();
    }

    resetInputs() {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: 0,
        })
    }

    render() {
        return (
            <section>
                <input className="name" 
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                />
                <input className="date" 
                    name="date"
                    type="date"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={(e) => this.handleChange(e)}
                />
                <input className="time" 
                    name="time"
                    type="text"
                    placeholder="Time"
                    value={this.state.time}
                    onChange={(e) => this.handleChange(e)}
                />
                <input className="guests" 
                    name="number"
                    type="number"
                    placeholder="Number of Guests"
                    value={this.state.number}
                    onChange={(e) => this.handleChange(e)}
                />
                <button onClick={(e) => this.handleSubmit(e)}>Make Reservations</button>

            </section>

        )
    }



}

export default Form;