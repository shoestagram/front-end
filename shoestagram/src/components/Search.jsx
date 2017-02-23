import React from 'react';
import '../stylesheets/search.css';

class Search extends React.Component {
  
  static propTypes = {
    onSearch: React.PropTypes.func.isRequired
  }

  _handleSubmit(e){
    e.preventDefault();
    var searchKicks = this.refs.userInput.value
    this.props.onSearch(searchKicks)
  }

  
  render() {
    return (
      <div className="searchBox">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input ref="userInput" type="text" placeholder="Search here..." className="inputDiv" />
          <button className="searchButton">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
      );
  }
}

export default Search;
