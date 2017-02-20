import React from 'react';
import '../stylesheets/navbar.css';
import { browserHistory } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
    <div className="headerAll">
      <div className="logoDiv">
        <p>SHOESTAGRAM</p>
      </div>
      <div className="backButtonDiv">
        <button className="backButton"
            onClick={browserHistory.goBack}>
            Go Back
        </button>
      </div>
    </div>
    );
  }
}

export default Navbar;