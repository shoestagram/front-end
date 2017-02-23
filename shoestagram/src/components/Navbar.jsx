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
        <div className="searchAndBack">
          <div className="headerBackButton">
            <button className="backButton"
                onClick={browserHistory.goBack}>
                Back
            </button>
          </div>
          <div className="searchBarDiv">
            <Search onSearch={this.props.onSearch} />
          </div>
        </div>
    </div>
    );
  }
}

export default Navbar;