import React from 'react';
import '../stylesheets/search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="searchBox">

          <input type="text" placeholder="Search here..." className="inputDiv" />
          <button className="searchButton">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>

      </div>
      );
  }
}

export default Search;
