import React from 'react';
import '../stylesheets/navbar.css';
import { browserHistory } from 'react-router';
import Search from './Search';

class Navbar extends React.Component {
  render() {
    return (
    <div className="headerAll">
        <div className="logoDiv">
          <p>SHOESTAGRAM</p>
        </div>
        <button className="backButton"
            onClick={browserHistory.goBack}>
            Back
        </button>
          <Search />
    </div>
    );
  }
}

export default Navbar;