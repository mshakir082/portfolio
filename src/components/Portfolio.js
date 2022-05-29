import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" style={{backgroundColor:"#10101a"}}>
      <div className="row" >
        <div className="twelve columns collapsed" >
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                  
              <>

                <div style={{border:"1px solid white",width:"1000.15px",height:"495.79px",marginLeft:"120px",borderRadius:"10px",marginLeft:"0px",marginBottom:"55px"}}>

                <div style={{width:"90%",height:"360px",marginTop:"30px",marginLeft:"50px",display:"flex"}}>
        
                    <div style={{width:"62%",height:"350px"}}><img src={`${item.imgurl}`} style={{height:"100%"}} className="item-img" /></div>
                    <div style={{width:"38%",height:"350px",color:"white"}}>
        
                        <h1 style={{fontSize:"25px",color:"white"}}>{item.name}</h1>
                        <p style={{textAlign:"left",fontSize:"18px",color:"#c8c6c9"}}>{`${item.description}`}</p> 
                       
        
                        <div style={{display: "flex"}}>
        
                        <div style={{border: "1px solid white",width:"100px",height:"50px",marginLeft:"15px"}}>
                        <a rel="noopener noreferrer" href={`${item.netlify}`} target="_blank">
                        <h4>
                        <p style={{marginTop:"10px",fontSize:"15px",color:"white",fontFamily:"sans-serif",marginLeft:"15px"}}>Live Site</p>
                        </h4>
                        </a>
                            
                        </div>
        
                        <div style={{border: "1px solid white",width:"120px",height:"50px",marginLeft:"15px"}}>

                        <a rel="noopener noreferrer" href={`${item.githubRepo}`} target="_blank">
                        <h4>
                        <p style={{marginTop:"10px",fontSize:"15px",color:"white",fontFamily:"sans-serif",marginLeft:"15px"}}>Github Repo</p>
                        </h4>
                        </a>
                            
                        </div>
        
                        </div>
                      
        
                         </div>
                    
        
                </div>
            </div>
            



                {/* <div style={{border: '1px solid red',width: '100%'}} className="columns portfolio-item">
                  <div className="item-wrap" >
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> */}
                </>

              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}