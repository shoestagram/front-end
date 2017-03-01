import NavNoSearch from './NavNoSearch';
import Footer from './Footer';
import React from 'react';
import Scroll from 'react-scroll';
import '../stylesheets/about.css';

var scroll = Scroll.animateScroll;

export class About extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.scrollToTop();
  }

  scrollToTop(){
    scroll.scrollToTop();
  }

  render() {
      return(
        <div className="aboutAll">
          <NavNoSearch />
          <a href="https://github.com/shoestagram" className="headerRow">
              <i className="fa fa-github fa-2x" aria-hidden="true"></i>
               <h2 className="mainHeader">See Shoestagram's Repos</h2>
          </a>

            <h2 className="midHeader">Meet The Crew:</h2>

              <div className="personDiv">
                <img alt="@coco-moloko" className="avatar" height="100" src="https://avatars2.githubusercontent.com/u/15265338?v=3&amp;s=400" width="100"/>
                <p className="aboutUs"><strong>Name:</strong> Coco Brecht
                <br />
                <strong>Created:</strong> Front End, UX Design</p>

                  <a href="https://github.com/coco-moloko">Github</a>
                  <a href="https://www.linkedin.com/in/coco%E2%80%8B-brecht/">Linkedin</a>
                  <a href="mailto:cocobrecht@gmail.com" target="_top">Email</a>
              </div>

              <div className="personDiv">
                <img alt="@melofunkcodes" className="avatar" height="100" src="https://avatars0.githubusercontent.com/u/22921878?v=3&s=460" width="100"/>
                <p className="aboutUs"><strong>Name:</strong> Melinda Yeoh
                <br />
                <strong>Created:</strong> Crawling, Front End</p>

                  <a href="https://github.com/MelofunkCodes">Github</a>
                  <a href="https://www.linkedin.com/in/melinda-yeoh">Linkedin</a>
                  <a href="mailto:myeoh27@gmail.com" target="_top">Email</a>
              </div>

              <div className="personDiv">
                <img alt="@coco-moloko" className="avatar" height="100" src="https://avatars3.githubusercontent.com/u/22350327?v=3&s=400" width="100"/>
                <p className="aboutUs"><strong>Name:</strong> Allen Lee
                <br />
                <strong>Created:</strong> Back End, Database</p>

                  <a href="https://github.com/allendecodemtl">Github</a>
                  <a href="https://www.linkedin.com/in/allenleechowpan/">Linkedin</a>
                  <a href="mailto:allen@leechowpan.com" target="_top">Email</a>
              </div>

          <Footer />
        </div>
      );
  }
}

export default About;
