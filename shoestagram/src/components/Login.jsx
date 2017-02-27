import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';
import '../stylesheets/login.css';
import mojs from 'mo-js';

class LogoFull extends mojs.CustomShape {
    getShape () {
      return `<g>
    		<path class="st0" d="M443.3,101.9c-7.5-14.2-22.8-15.3-23-15.3c-84.9-6.8-153-41.6-185.7-58.3c-8-4.1-23.8-11.1-25.3-11.7L173,0.5
    			c-2.2-1-4.8-0.4-6.3,1.4c-10.2,11.9-9.8,25.5-8.8,32.1c-13.8,10-36.2,22.7-37.8,23.7c-3.7,2.2-7.6,3.2-11.9,3.2
    			c-19.9,0-40.9-22-45.5-27.1C58.5,13,45.3,9.9,37.6,9.9c-5.9,0-10.4,1.8-10.9,2c-1.4,0.6-2.5,1.7-3,3.1C5.9,61-1.9,97.9,0.4,124.6
    			c1.3,14.8,5.5,22.7,8.3,26.4l-5.3,28.6c-0.2,0.9-0.1,1.8,0.2,2.6c0.7,2.1,7.9,20.2,56.6,20.2h246.4c2.1,0,86-8,126.6-41.1
    			c0.7-0.6,1.3-1.4,1.6-2.2c0,0,9.9-25.2,9.9-25.3C448.9,121.3,447.9,110.7,443.3,101.9z M369.1,90.1c13.5,2.8,27.7,5.1,42.4,6.6
    			c-7.6,2.8-18.9,6-33.7,8.9c-24,4.7-27.4,6.2-45.8,20.3c-11.7,9-68.3,8.1-118.7-5.1l51.6-36.1c6.5,3,23.2,9.8,41.6,14.6
    			C331.9,105.9,358.4,103.8,369.1,90.1z M176.5,120c24.8,10.4,59.6,18.4,93.2,21.4c6.3,0.6,16,1.2,26.4,1.2c6.2,0,12.6-0.2,18.7-0.9
    			l-27.9,25c-24.7-0.2-55.7-3-92.3-8.2c-29.5-4.3-54.7-6.3-77.1-7.2c-6-10.1-12-19.3-17.9-27.6C109.4,117.2,137.3,103.6,176.5,120z
    			 M174.6,107.6l49.5-32.4c0.1,0,0.1,0,0.1-0.1c0.3-0.2,7.3-4.9,17-0.7c3.9,1.7,8.3,3.6,12,5.2l-53.4,37.4c-6.6-2.1-13.1-4.4-19.2-7
    			C178.6,109.1,176.6,108.3,174.6,107.6z M213.3,30c-6.1,3.4-6.6,3.8-6.9,4c-2.4,1.8-2.9,5.2-1.2,7.6c1.1,1.4,2.7,2.2,4.4,2.2
    			c1.1,0,2.1-0.3,3.1-0.9c0.9-0.6,6.7-3.8,12.6-7c1.4,0.7,9.6,4.9,12.6,6.4c-2.4,1.6-4.6,3.1-5.3,3.6c-2.4,1.8-3,5.1-1.2,7.6
    			c1.1,1.5,2.7,2.2,4.4,2.2c1.1,0,2.2-0.3,3.2-1c0.9-0.6,5.9-4,10.1-6.8c3.9,1.9,8,3.8,12.3,5.9l-3.7,3.6c-2.2,2.1-2.2,5.5-0.1,7.7
    			c1.1,1.1,2.5,1.7,3.9,1.7c1.4,0,2.7-0.5,3.8-1.5l6.8-6.6c3.8,1.7,7.8,3.4,11.9,5.1l-2.6,4.1c-1.6,2.5-0.9,5.9,1.6,7.5
    			c0.9,0.6,1.9,0.9,2.9,0.9c1.8,0,3.5-0.9,4.6-2.5l3.8-5.8c4.4,1.7,9,3.4,13.7,5.1l-1.8,3.5c-1.4,2.7-0.3,5.9,2.3,7.3
    			c0.8,0.4,1.6,0.6,2.5,0.6c2,0,3.9-1.1,4.8-2.9l2.5-4.9c4.2,1.4,8.5,2.8,12.9,4.1l-0.5,1.1c-1.3,2.7-0.1,5.9,2.6,7.2
    			c0.8,0.4,1.5,0.5,2.3,0.5c2,0,4-1.1,4.9-3.1l1.3-2.7c4.8,1.3,9.7,2.6,14.6,3.8c-33.6,17.8-84.2-11.6-110.8-22.8
    			c-14.7-6.2-25.9,0.7-27.4,1.7l-57.3,37.5c-34.1-7.6-58.1,4.7-67.8,11.1c-4.9-6.6-9.8-12.5-14.5-18c7.5,1.7,14.7,2.5,21.7,2.5
    			c30.8,0,56.5-15.1,77-30c8.5-6.2,12.9-13.4,13.1-21.4c0.2-8-4-14.8-7.6-19c5.1-3.6,8.3-5.2,11.3-5.1
    			C200.1,23.9,212.8,29.7,213.3,30z M172.6,12.2l9.5,4.3c-3.9,2.2-8.2,5.4-13.8,9.7C168.5,22.1,169.5,17,172.6,12.2z M125.5,67
    			c4.8-2.2,48.3-31.5,48.6-31.7c2.5,2.8,5.5,7.4,5.4,12.3c-0.1,4.5-3,8.8-8.7,12.9c-18.9,13.8-42.7,27.8-70.8,27.8
    			c-7.6,0-15.4-1-23.6-3.3c6.7-3.1,14.1-8,19.2-15.3c4.1,1.2,8.3,2,12.5,2C114.3,71.7,119.9,69.6,125.5,67z M33,21.3
    			c1.2-0.3,2.9-0.6,4.7-0.6c7.9,0,12.7,5.4,14.6,16.4c0.2,1,0.6,1.8,1.2,2.6c0.8,0.9,14.2,16.7,31.8,25.8
    			c-6.8,8.1-18.1,11.9-23.3,13.4C44.1,61.1,31.4,53.1,30.4,52.5c-1.6-1-3.7-1.1-5.4-0.2l-3.4,1.8C24.6,44.2,28.4,33.3,33,21.3z
    			 M17.6,68.6l9.6-5.2c9.5,6.7,43.7,33.1,77.1,87.3c-9.8-0.3-26.3-0.7-36.3-0.3c-7.7,0.3-42.2-0.4-50.3-5.3
    			C16.3,143.4,3,126.4,17.6,68.6z M425.2,153.9c-37.4,29.4-114.1,37.3-118.9,37.7H60.2c-33.8,0-43.5-9-45.8-11.9l4.1-22.3
    			c10.2,3.6,47.2,3.9,49.6,3.9c7.2,0.1,76.6,0.9,124.9,7.9c38.5,5.5,71,8.3,96.7,8.3c22.6,0,49.1-4.2,51.9-4.6
    			c27.5-3.8,67.6-20.2,87.8-29.7L425.2,153.9z M435,128.4c-10.8,5.4-62.8,29.3-94.5,33.7c-3.4,0.5-23.6,3.7-37.1,4.3l38.5-34.4
    			c14.1-10.7,17.2-11.7,38-15.8c14-2.7,37.2-8.1,47.6-15.3c2.4,1.5,4.8,3.6,6.5,6.5C437.1,112.8,437.5,119.8,435,128.4z"/>
    	</g>
    	<g>
    		<path class="st0" d="M12.5,266c0-3.1,1.3-5.6,3.8-7.8c2.6-2.1,5.9-3.2,9.9-3.2s7.2,1,9.6,3.1c2.3,2.1,3.6,4.9,3.8,8.5h-6.3
    			c-0.1-2-0.8-3.7-2.1-4.9c-1.3-1.2-3.1-1.9-5.4-1.9c-2.3,0-4.1,0.5-5.4,1.6c-1.3,1.1-2,2.5-2,4.2s0.7,3,2.2,4
    			c1.5,0.9,3.3,1.6,5.4,2c2.1,0.4,4.2,0.9,6.3,1.5c2.1,0.6,3.9,1.6,5.4,3.1c1.5,1.5,2.2,3.7,2.2,6.5c0,2.8-1.3,5.2-3.8,7.1
    			c-2.6,1.9-5.9,2.9-10,2.9c-4.1,0-7.4-1-9.8-3.1c-2.5-2-3.8-4.9-4-8.5h6.3c0.1,2,0.8,3.7,2.2,4.9c1.4,1.2,3.2,1.8,5.6,1.8
    			c2.4,0,4.2-0.5,5.6-1.5c1.4-1,2-2.3,2-3.9c0-1.6-0.5-2.8-1.6-3.8s-2.4-1.6-4-1.9c-1.6-0.4-3.3-0.8-5.2-1.3c-1.9-0.5-3.6-1-5.2-1.6
    			c-1.6-0.6-2.9-1.5-4-2.9C13,269.8,12.5,268.1,12.5,266z"/>
    		<path class="st0" d="M54.9,242.9v18.6c2.5-4.4,6.5-6.5,11.9-6.5c4,0,7.4,1.3,10.1,4c2.7,2.7,4.1,6.5,4.1,11.5v21.6h-6v-20.6
    			c0-3.7-0.9-6.5-2.7-8.4c-1.8-1.9-4.2-2.9-7.4-2.9s-5.6,1-7.4,2.9c-1.8,1.9-2.7,4.7-2.7,8.4v20.6h-6.1v-49.3H54.9z"/>
    		<path class="st0" d="M93.3,287.6c-3.4-3.5-5-8-5-13.7c0-5.6,1.8-10.2,5.3-13.7c3.5-3.5,7.9-5.2,13.2-5.2c5.3,0,9.7,1.7,13.2,5.2
    			c3.5,3.5,5.3,8,5.3,13.7c0,5.6-1.8,10.2-5.5,13.7c-3.7,3.5-8.1,5.2-13.4,5.2C100.9,292.8,96.6,291.1,93.3,287.6z M106.2,287.8
    			c3.4,0,6.4-1.2,8.9-3.7c2.5-2.5,3.8-5.9,3.8-10.2c0-4.4-1.2-7.7-3.6-10.2c-2.4-2.4-5.3-3.7-8.8-3.7c-3.4,0-6.3,1.2-8.6,3.7
    			c-2.3,2.4-3.5,5.8-3.5,10.2c0,4.4,1.1,7.8,3.3,10.2C100,286.6,102.8,287.8,106.2,287.8z"/>
    		<path class="st0" d="M148,292.8c-5.2,0-9.5-1.7-12.8-5.2c-3.3-3.5-4.9-8-4.9-13.7s1.7-10.2,5-13.7c3.3-3.4,7.6-5.2,13-5.2
    			c5.3,0,9.6,1.6,12.8,4.9c3.2,3.3,4.8,7.4,4.8,12.5c0,1.3-0.1,2.5-0.3,3.6h-29.1c0.2,3.6,1.3,6.5,3.4,8.6c2.1,2.1,4.8,3.2,8.1,3.2
    			c2.5,0,4.6-0.6,6.3-1.7c1.7-1.1,3-2.6,3.8-4.4h6.5c-1.2,3.2-3.1,5.8-6,7.9C155.8,291.8,152.3,292.8,148,292.8z M156.2,263.2
    			c-2.2-2.1-4.9-3.2-8.1-3.2c-3.2,0-5.9,1-8,3.1c-2.1,2.1-3.3,4.9-3.5,8.5h23C159.5,268.1,158.4,265.3,156.2,263.2z"/>
    		<path class="st0" d="M172.1,266c0-3.1,1.3-5.6,3.8-7.8c2.6-2.1,5.9-3.2,9.9-3.2s7.2,1,9.6,3.1c2.3,2.1,3.6,4.9,3.8,8.5h-6.3
    			c-0.1-2-0.8-3.7-2.1-4.9c-1.3-1.2-3.1-1.9-5.4-1.9c-2.3,0-4.1,0.5-5.4,1.6c-1.3,1.1-2,2.5-2,4.2s0.7,3,2.2,4
    			c1.5,0.9,3.3,1.6,5.4,2c2.1,0.4,4.2,0.9,6.3,1.5c2.1,0.6,3.9,1.6,5.4,3.1c1.5,1.5,2.2,3.7,2.2,6.5c0,2.8-1.3,5.2-3.8,7.1
    			c-2.6,1.9-5.9,2.9-10,2.9c-4.1,0-7.4-1-9.8-3.1c-2.5-2-3.8-4.9-4-8.5h6.3c0.1,2,0.8,3.7,2.2,4.9c1.4,1.2,3.2,1.8,5.6,1.8
    			c2.4,0,4.2-0.5,5.6-1.5c1.4-1,2-2.3,2-3.9c0-1.6-0.5-2.8-1.6-3.8s-2.4-1.6-4-1.9c-1.6-0.4-3.3-0.8-5.2-1.3c-1.9-0.5-3.6-1-5.2-1.6
    			c-1.6-0.6-2.9-1.5-4-2.9C172.6,269.8,172.1,268.1,172.1,266z"/>
    		<path class="st0" d="M220.4,287.3h5v4.9h-6.1c-6.3,0-9.5-3.1-9.5-9.4v-22.2H205v-4.9h4.7v-9.1h6.1v9.1h9.5v4.9h-9.5v22.2
    			c0,1.6,0.3,2.8,1,3.5C217.6,287,218.7,287.3,220.4,287.3z"/>
    		<path class="st0" d="M234.7,287.5c-3.3-3.6-5-8.1-5-13.7c0-5.6,1.7-10.1,5-13.5c3.3-3.4,7.5-5.2,12.5-5.2c3.1,0,5.8,0.7,8.2,2.2
    			c2.3,1.5,4.1,3.4,5.3,5.7v-7.3h6.1v36.6h-6.1v-7.5c-1.2,2.4-3,4.3-5.3,5.8c-2.3,1.5-5.1,2.2-8.2,2.2
    			C242.2,292.8,238,291,234.7,287.5z M257,283.9c2.4-2.5,3.6-5.8,3.6-9.9s-1.2-7.4-3.6-9.9c-2.4-2.5-5.3-3.7-8.7-3.7
    			s-6.3,1.2-8.7,3.6c-2.4,2.4-3.6,5.7-3.6,9.8c0,4.1,1.2,7.5,3.7,10.1c2.4,2.6,5.3,3.9,8.7,3.9C251.6,287.6,254.5,286.4,257,283.9z"
    			/>
    		<path class="st0" d="M279.3,287.5c-3.3-3.6-5-8.1-5-13.7c0-5.6,1.7-10.1,5-13.5c3.3-3.4,7.5-5.2,12.5-5.2c3.1,0,5.8,0.7,8.2,2.2
    			c2.3,1.5,4.1,3.4,5.3,5.7v-7.3h6.1v37.5c0,5-1.6,9.1-4.9,12.3c-3.2,3.2-7.3,4.8-12.3,4.8c-5,0-9.1-1.2-12.4-3.5
    			c-3.3-2.3-5.1-5.3-5.6-9.1h5.9c0.6,2.1,1.9,3.8,4.1,5.2s4.8,2.1,7.9,2.1c3.2,0,5.8-1,7.9-3.1s3.2-5,3.2-8.7v-8.4
    			c-1.2,2.4-3,4.3-5.3,5.8c-2.3,1.5-5.1,2.2-8.2,2.2C286.8,292.8,282.6,291,279.3,287.5z M301.6,283.9c2.4-2.5,3.6-5.8,3.6-9.9
    			s-1.2-7.4-3.6-9.9c-2.4-2.5-5.3-3.7-8.7-3.7s-6.3,1.2-8.7,3.6c-2.4,2.4-3.6,5.7-3.6,9.8c0,4.1,1.2,7.5,3.7,10.1
    			c2.4,2.6,5.3,3.9,8.7,3.9C296.3,287.6,299.2,286.4,301.6,283.9z"/>
    		<path class="st0" d="M327.4,255.7v6.2c2.2-4.5,5.9-6.8,11.1-6.8v6.3h-1.6c-3.1,0-5.5,0.8-7.1,2.4c-1.6,1.6-2.4,4.4-2.4,8.4v20
    			h-6.1v-36.6H327.4z"/>
    		<path class="st0" d="M348.4,287.5c-3.3-3.6-5-8.1-5-13.7c0-5.6,1.7-10.1,5-13.5c3.3-3.4,7.5-5.2,12.5-5.2c3.1,0,5.8,0.7,8.2,2.2
    			c2.3,1.5,4.1,3.4,5.3,5.7v-7.3h6.1v36.6h-6.1v-7.5c-1.2,2.4-3,4.3-5.3,5.8c-2.3,1.5-5.1,2.2-8.2,2.2
    			C355.9,292.8,351.7,291,348.4,287.5z M370.7,283.9c2.4-2.5,3.6-5.8,3.6-9.9s-1.2-7.4-3.6-9.9c-2.4-2.5-5.3-3.7-8.7-3.7
    			s-6.3,1.2-8.7,3.6c-2.4,2.4-3.6,5.7-3.6,9.8c0,4.1,1.2,7.5,3.7,10.1c2.4,2.6,5.3,3.9,8.7,3.9C365.4,287.6,368.3,286.4,370.7,283.9
    			z"/>
    		<path class="st0" d="M396.5,255.7v5.9c2.5-4.4,6.5-6.5,11.9-6.5c2.8,0,5.3,0.7,7.6,2c2.3,1.4,4,3.3,5.1,5.9
    			c1.3-2.5,3.1-4.4,5.4-5.8c2.3-1.4,4.9-2.1,7.8-2.1c4.1,0,7.5,1.3,10.3,4c2.7,2.7,4.1,6.5,4.1,11.5v21.6h-6v-20.6
    			c0-3.7-0.9-6.5-2.7-8.4c-1.8-1.9-4.3-2.9-7.4-2.9s-5.6,1-7.4,2.9c-1.8,1.9-2.7,4.7-2.7,8.4v20.6h-6v-20.6c0-3.7-0.9-6.5-2.7-8.4
    			c-1.8-1.9-4.2-2.9-7.4-2.9s-5.6,1-7.4,2.9c-1.8,1.9-2.7,4.7-2.7,8.4v20.6h-6.1v-36.6H396.5z"/>
    	</g>`;
    }
    getLength () { return 2556.181; } // optional
  }
  mojs.addShape( 'logoFull', LogoFull );



const Burst = React.createClass({
  render() {
    return (<div className="logoReveal" ref="logo"></div>);
  },


  componentDidMount () {
    this._burst = new mojs.Burst({
      parent:   this.refs.logo,
      radius:   { 4: 49 },
      angle:    45,
      count:    12,
      isShowEnd: false,

      children: {
        radius:       100,
        fill:         '#ecdded',
        scale:        { 1: 0, easing: 'sin.in' },
        pathScale:    [ .7, null ],
        degreeShift:  [ 13, null ],
        duration:     1500,
        isForce3d:    true
      }
    }).play();

      new mojs.Shape({
        parent:   this.refs.logo,
      shape:  			'circle',
      scale:   			{ 0 : 1.5, easing: 'cubic.out' },
      fill:         { '#FFF': '#362648', easing: 'cubic.out' },
      delay:        1500,
      duration:     1500,
      repeat:       0,
    }).play();


        this.logoFull = new mojs.Shape({
          parent:   this.refs.logo,
            shape:    'logoFull',
            height : 600,
            width: 1000,
            scale: 0.215,
            duration: 500,
            fill: 'white',
            origin: '450 270',
            opacity: {0:1},
            delay: 2100
          }).play();
  }
});





export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {

    const { auth } = this.props.route;
    return (
      <div className="loginContainer">
        <Burst />
        <div className="buttonDiv">
          <button className="loginButton" onClick={auth.login.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}


export default Login;