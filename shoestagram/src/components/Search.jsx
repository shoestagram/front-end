import React from 'react';
import '../stylesheets/search.css';

class Search extends React.Component {
  render() {
    return (
      <form className="form-wrapper">
        <input type="text" placeholder="Search here..." className="inputDiv"/>
        <input type="text" class="searchButton" id="iconified" placeholder="&#xF002;"/>
      </form>
      );
  }
}

export default Search;