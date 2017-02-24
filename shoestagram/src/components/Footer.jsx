import React from 'react';
import '../stylesheets/footer.css';
// import { Link } from 'react-router'

        // <div className="cartDiv iconDiv">
        //   <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
        // </div>

class Footer extends React.Component {
  render() {
    return (
    <div className="footerAll">
      <div className="iconsAll">
        <div className="homeDiv iconDiv" >
         <i className="fa fa-home fa-3x" aria-hidden="true"></i>
        </div>
        <div className="cartDiv iconDiv">
          <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
        </div>
        <div className="profileDiv iconDiv">
          <i className="fa fa-user fa-3x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;