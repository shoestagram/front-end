import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {



  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
    
    return (
      <div className="App">
        <Navbar />
            <main className="main-content">
                {children}
            </main>
        <Footer />
      </div>
    );
  }
}

export default App;
