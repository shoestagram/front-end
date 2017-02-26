import React from 'react';
import Collapsible from 'react-collapsible';


import '../stylesheets/media.css';
import NavNoSearch from './NavNoSearch';
import Footer from './Footer';
import GMap from './GMap';


//to change Like button on click <i className="fa fa-thumbs-up" aria-hidden="true"></i>

class Media extends React.Component {
  
    constructor() {
      super();
      this.state = {
        media:[{
          media_url:""
        }],
        shoplinks:[{
          description:""
        }]
      };
  }

  fetchSingleImage = () => {
      
      var media_id = this.props.params.id;
      
      this.setState({
          loading: true,
      });

     
      var url = `https://cors-anywhere.herokuapp.com/https://shoestagram-allendecodemtl.c9users.io/media/${media_id}`
      console.log(url);


      fetch(url)
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  media: data
              });
          }.bind(this)
      );
  }
  
  fetchShopLinks = () => {
      
      var media_id = this.props.params.id;
      
      var url = `https://cors-anywhere.herokuapp.com/https://shoestagram-allendecodemtl.c9users.io/shoplinks/${media_id}`
      console.log(url);


      fetch(url)
      .then(response => response.json())
      .then(function(data){
              this.setState({
                  shoplinks: data
              });
              
          }.bind(this)
      );
  }


  componentDidMount(){
    this.fetchSingleImage();
    this.fetchShopLinks();
  }
  
  render() {
    var media_id = this.props.params.id;
    var user_id = this.props.route.auth.getProfile().user_id;
    
    return (
      
      <div className="mediaAll">
      <NavNoSearch m_id={media_id} u_id={user_id}/>
          <div className="mediaJumboPic">
            <img className="mediaJumboPic" src={this.state.media[0].media_url} key={this.state.media[0].id} alt=""/>
          </div>
          
          <h2 className="headerStyle">
            {this.state.media[0].text}
          </h2>
          <p className="parStyle">
            {this.state.media[0].keyword}
          </p>
         
        
      <div>

        <Collapsible lazyRender 
        transitionTime={600} 
        trigger="Buy Online" 
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} 
        overflowWhenOpen="visible"
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open">        
          {this.state.shoplinks.map(function(item, i){
            return(
              
              <a href={item.url}>
                <div>
                  {item.source}
                  {item.description}
                  <div className="linkButton"><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i></div>
                  {item.price}
                </div>
              </a>
            )
          })}
        </Collapsible>

        <Collapsible lazyRender
        transitionTime={400} 
        trigger="Buy In Store" 
        easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
        triggerClassName="CustomTriggerCSS"
        triggerOpenedClassName="CustomTriggerCSS--open">
          <div className="map-box">
            <GMap />
          </div>
        </Collapsible>

      </div>  
        
        <Footer />
      </div>
    );
  }
}

export default Media;