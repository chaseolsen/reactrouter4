import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import react router 4
import { BrowserRouter, Route } from 'react-router-dom';

// const Home = (props) => {
//   console.log(props);
//   return (
//     <div>
//     <NavLink to='/contact' activeClassName="active">contact</NavLink>
//     </div>
//   )
// }

import Home from './pages/Home.js';
import Login from './pages/Login.js';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
