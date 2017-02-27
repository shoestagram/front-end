import React from 'react';
import { browserHistory } from 'react-router';
import '../stylesheets/navnosearch.css';

class NavNoSearch extends React.Component {
    
    
  _handleSubmit() {
    
    var user_id = this.props.u_id;
    var media_id = this.props.m_id;
    
    
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    myHeaders.append('X-User-ID', user_id);
    myHeaders.append('X-Media-ID', media_id);
   
    var myInit = { method: 'POST',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default'
                 };
    
    fetch("https://cors-anywhere.herokuapp.com/https://shoestagram-allendecodemtl.c9users.io/profile", myInit)
    .then(function(res){
      alert("Added as favorites");
      console.log(res) 
    })
    .catch(function(err){ console.log(err)})
  }
  
  render() {
    
    return (
      <div className="navBarAll">
          <div className="logoDivNoSearch">
            <p>SHOESTAGRAM</p>
          </div>
          <div className="bottomBar">
             <button className="backButtonNoSearch"
                onClick={browserHistory.goBack}>
                Back
            </button>
            {!this.props.hideLikeBtn ?
                <div className="likeButton" onClick={this._handleSubmit.bind(this)}>
                  <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
               </div> 
                : null }
          </div>
      </div> 
    );
  }
}

export default NavNoSearch;