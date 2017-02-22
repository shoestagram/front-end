import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';

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
      profile: props.auth.getProfile()
    };
    //listen to profile_updated events to update internal state
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
  }

  render() {
    const { profile } = this.state;
    console.log(profile);
    return (
        <div>
          <img src={profile.picture} alt="Your profile" />
          <h3>Profile</h3>
          <p><strong>Name: </strong> {profile.name}</p>
          <p><strong>Email: </strong> {profile.email}</p>
          <p><strong>Nickname: </strong> {profile.nickname}</p>
          <p><strong>Created At: </strong> {profile.created_at}</p>
          <p><strong>Updated At: </strong> {profile.updated_at}</p>
        </div>
    );
  }
}

export default Profile;
