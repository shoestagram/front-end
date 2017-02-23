import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';
import '../stylesheets/login.css';



export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props.route;
    return (
      <div className="loginContainer">
        <h2 className="loginText">Click To Proceed</h2>
        <div>
          <button className="loginButton" onClick={auth.login.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
