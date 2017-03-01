import React from 'react';
import Scroll from 'react-scroll';
import '../stylesheets/home.css';
import { Link } from 'react-router';

var scroll = Scroll.animateScroll;

class Home extends React.Component {

  constructor() {
      super();
      this.state = {
        media:[]
      };
  }

  fetchData = () => {
      // This is the user ID
      // This is the user ID
      var user_id = this.props.auth.getProfile().user_id;


      this.setState({
          loading: true,
      });

      var temp = "";

      if (this.props.search === undefined){
          temp = "";
      } else {
        temp = this.props.search;

        temp = escape(temp).replace("20", "");
        //this allows us to convert any search user enters with spaces to proper query to our endpoint (i.e. "nike air" becomes "nike%air")
      }

      var url = `http://shoestagram.net:3000/search?key=%${temp}%`;
      console.log(url);


      fetch(url, {
      	headers: new Headers({
      		'Content-Type': 'application/x-www-form-urlencoded',
          'X-User-ID': user_id,
      	})
      })
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  //media: this.state.media.concat(data),
                  media: data
              });
          }.bind(this)
      );
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.search !== prevProps.search){
      // this.setState({
      //     media: [],
      // });
      this.fetchData();
      this.scrollToTop();
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  scrollToTop(){
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="homeAll">
        <div className="containerDiv">
          {this.state.media.map(function(item, i){
            return(
              <Link to={`/media/${item.id}`}>
                <div className="squareDiv" style={{backgroundImage: `url(${item.media_url})`}}>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;
