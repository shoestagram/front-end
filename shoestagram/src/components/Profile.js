import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';
import '../stylesheets/profile.css';
import NavNoSearch from './NavNoSearch';
import Footer from './Footer';
import { Link } from 'react-router';


export class Profile extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.state = {
      profile: props.route.auth.getProfile(),
      media:[]
      
    };
    //listen to profile_updated events to update internal state
    props.route.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
  }

  fetchData = () => {
      // This is the user ID
      const { profile } = this.state;
      var user_id = profile.user_id;
      
      var url = `https://cors-anywhere.herokuapp.com/https://shoestagram-allendecodemtl.c9users.io/profile`
      
      fetch(url, {
      	headers: new Headers({
      		'Content-Type': 'application/x-www-form-urlencoded',
          'X-User-ID': user_id
      	})
      })
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  media: data
              });
          }.bind(this)
      );
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.search !== prevProps.search){
      this.fetchData();
    }
  }

  componentDidMount(){
    this.fetchData();
  }


  render() {
    const { profile } = this.state;
    //console.log(profile);
    
    return (
        <div className="profileAll">
        <NavNoSearch hideLikeBtn="{true}" />
          <div className="profileRow">
             <img className="profilePic" src={profile.picture} alt="Your profile" />
             <div className="textAll">
              <p><strong>Name: </strong> {profile.name}</p>
              <p><strong>Nickname: </strong> {profile.nickname}</p>
            </div>
          </div>

      <div className="profileBody">
        <div className="containerLikes">
           {this.state.media.map(function(item, i){
            return(
            <Link to={`/media/${item.id}`}>
                
              <div>
                <img className="squareLikes" key={item.id} src={item.media_url} alt=""/>
              </div>
            </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Profile;
