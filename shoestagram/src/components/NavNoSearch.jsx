import React from 'react';
import { browserHistory } from 'react-router';
import '../stylesheets/navnosearch.css';

class NavNoSearch extends React.Component {

  render() {
    return (
      <div className="navBarAll">
          <div className="logoDivNoSearch">
            <p>SHOESTAGRAM</p>
          </div>
          <div className="bottomBar">
             <button className="backButtonNoSearch"
                onClick={browserHistory.goBack}>
                Back
            </button>
            <div className="likeButton">
              <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
            </div>
          </div>
      </div> 
    );
  }
}

export default NavNoSearch;