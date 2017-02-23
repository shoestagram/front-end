import React from 'react';
import '../stylesheets/home.css';

class Home extends React.Component {
  
    constructor() {
      super();
      this.state = {
        media:[]
      };
  }

  fetchData = () => {
      // This is the user ID
      var user_id = this.props.auth.getProfile().clientID


      this.setState({
          loading: true,
      });

      var temp = "";

      if (this.props.search === undefined){
          temp = "";
      } else {
        temp = this.props.search;
      }

      var url = `https://cors-anywhere.herokuapp.com/https://shoestagram-allendecodemtl.c9users.io/search?key=%${temp}%`
      console.log(url);


      fetch(url, {
      	headers: new Headers({
      		'Content-Type': 'application/x-www-form-urlencoded',
          'X-User-ID': user_id
      	})
      })
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  media: this.state.media.concat(data),
              });
          }.bind(this)
      );
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.search !== prevProps.search){
      this.setState({
          media: [],
      });
      this.fetchData();
    }
  }

  componentDidMount(){
    this.fetchData();
  }
  render() {
    return (
      <div className="homeAll">
        <div className="containerDiv">
          {this.state.media.map(function(item, i){
            return(
              <div key={item.id} >
                <img className="squareDiv" src={item.media_url} alt=""/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;
