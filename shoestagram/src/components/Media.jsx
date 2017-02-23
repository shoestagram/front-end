import React from 'react';
import '../stylesheets/media.css';
// import Navbar from './Navbar';
// import '../stylesheets/navbar.css';
// import 'App.css';

//to change Like button on click <i className="fa fa-thumbs-up" aria-hidden="true"></i>

class Media extends React.Component {
  
  
  render() {
    return (
      <div className="mediaAll">
          <div className="mediaJumboPic">JumboImage Goes Here </div>
          <div className="likeButton"><i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i></div>
          <h2 className="headerStyle">PRODUCT DESCRIPTION GOES HERE SUPER LONG TEST WOWOWOWOWO</h2>
          <p className="parStyle">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
      <div className="buttonRow">
          <div className="buyOnline">Buy Online</div>
          <div className="buyInStore">Buy In-Store</div>
      </div>
      
        <div className="accordionLinks">
            <div className="linkDiv">
                  <div className="words">
                    <p className="productName">from Provider goes here blah blah blah super long just in case wow its still going I cantfdsf fdfsdf fdfs</p>
                  </div>
                <h3 className="priceDiv">$200</h3>
                <div className="linkButton"><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
            </div>
        </div>
          <div className="accordionLinks">
            <div className="linkDiv">
                  <div className="words">
                    <p className="productName">from Ebay</p>
                  </div>
                <div className="linkButton"><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
            </div>
        </div>
        
        <div className="googleMapsContainer"> Map container goes here</div>
      </div>
    );
  }
}

export default Media;