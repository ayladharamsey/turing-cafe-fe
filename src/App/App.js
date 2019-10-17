import React, { Component } from 'react';
import './App.css';
// import Form from '../Form/Form'
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'

class App extends Component {
  constructor()  {
    super();
    this.state = {
      reservations: [],
      error: '' 
    }
  }

  componentDidMount() {
      fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
        .then(data => this.setState({reservations: [...data]}))
        .catch(errMsg => this.setState({error: errMsg}))
  }

  addBooking() {

  }

  removeBooking() {

  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          {/* <Form addBooking={this.addBooking}/>  */}
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations}removeBooking={this.removeBooking}/>
        </div>
      </div>
    )
  }
}

export default App;
