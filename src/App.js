import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Seat from './Seat.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {seats: []};
  }

  componentDidMount(){
    this.setState({seats: [
      {row: 0, num: 0, avail: false},
      {row: 0, num: 1, avail: false},
      {row: 0, num: 2, avail: true},
      {row: 0, num: 3, avail: false},
      {row: 0, num: 4, avail: true},
      {row: 1, num: 0, avail: true},
      {row: 1, num: 1, avail: true},
      {row: 1, num: 2, avail: false},
      {row: 1, num: 3, avail: true},
      {row: 1, num: 4, avail: true},
      {row: 2, num: 0, avail: false},
      {row: 2, num: 1, avail: false},
      {row: 2, num: 2, avail: true},
      {row: 2, num: 3, avail: true},
      {row: 2, num: 4, avail: true}
    ]}, () => console.log(this.state.seats));
  }
  render() {
    let seats = new Array(3);
    for(let i = 0; i < seats.length; i++ ){
      seats[i] = new Array(5);
    }

    if (this.state.seats) {
      this.state.seats.forEach(seat => {
        seats[seat.row][seat.num] = <Seat row = {seat.row} num = {seat.num}
        avail = {seat.avail} key = {seat.row + seat.num} />
      });
    } 
    return (
      <div>
        <div id="stage-container">
          <svg width="500" height="200">
            <ellipse cx="250" cy="100" rx="250" ry="100" />
            <rect x="0" y="0" width="500" height="100" />
          </svg>
          <h1 id="stage">stage</h1>
        </div>
        <div className="Row1">
          {seats[0]}
        </div>
        <div className="Row2">
          {seats[1]}
        </div>
        <div className="Row3">
          {seats[2]}
        </div>
      </div>
    );
  }
}

export default App;
