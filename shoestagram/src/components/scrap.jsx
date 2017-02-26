      <div className="buttonRow">
          <Collapsible trigger="Buy Online" className="buyOnline">
            <div className="accordionLinks">
              <div className="linkDiv">
                <div className="words">
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
                </div>
              </div>
            </div>
          </Collapsible>
          
          <Collapsible trigger="Buy In-Store" className="buyInStore">
            <div className="googleMapsContainer"><GMap /></div>
          </Collapsible>
      </div>