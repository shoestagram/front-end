import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {

  constructor(){
    super();
    this.state ={};
  }

  _onSearch = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
  }

  render() {
    return (
      <div className="App">
        <Navbar onSearch={this._onSearch} />
            <main className="main-content">
                <Home search={this.state.searchTerm} auth={this.props.route.auth}/>
            </main>
        <Footer />
      </div>
    );
  }
}

export default App;
