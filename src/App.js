import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// For Link Components, import from react-router dom
// import { Link } from 'react-router-dom';
// basic way
// <div className="App">
//   <Link to="/home">Home</Link>
// </div>

import { NavLink } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">

        <NavLink to='/home' activeClassName="active">Home</NavLink>


        <NavLink to='/contact' activeClassName="active">contact</NavLink>

      </div>
    );
  }
}

export default App;
