import React from 'react';
import '../stylesheets/search.css';

class Search extends React.Component {
  render() {
    return (
      <form className="form-wrapper cf">
        <input type="text" placeholder="Search here..." name="inputDiv"/>
        <input type="button" value="search"/>
      </form>
      );
  }
}

export default Search;