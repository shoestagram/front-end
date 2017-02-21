import React from 'react';
import '../stylesheets/media.css';

class Media extends React.Component {
  render() {
    return (
        <div className="mediaAll">
            <div className="mediaJumboPic">JumboImage Goes Here </div>
            <h2 className="headerStyle">PRODUCT DESCRIPTION GOES HERE SUPER LONG TEST WOWOWOWOWO</h2>
            <p className="parStyle">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
        <div className="buttonRow">
            <div className="buyOnline">Buy Online</div>
            <div className="buyInStore">Buy In-Store</div>
        </div>
        </div>
    );
  }
}

export default Media;