import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'



export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
        <div>
          <button onClick={auth.login.bind(this)}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;
