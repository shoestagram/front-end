import React from 'react';
import '../stylesheets/footer.css';
import { Link } from 'react-router';

        // <div className="cartDiv iconDiv">
        //   <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
        // </div>

class Footer extends React.Component {
  render() {
    return (
    <div className="footerAll">
      <div className="iconsAll">
      
        <div className="homeDiv" >
          <Link to={`/`}>
           <i className="fa fa-home fa-2x" aria-hidden="true"></i>
          </Link>
        </div>
        
        <div className="profileDiv">
          <Link to={`/profile`}>
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
         </Link>
        </div>
        
        <div className="aboutDiv">
          <Link to={`/about`}>
            <i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>
         </Link>
        </div>
        
      </div>
    </div>
    );
  }
}

export default Footer;