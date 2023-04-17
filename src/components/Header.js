import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
             <li><a className="smoothscroll" href="https://docs.google.com/document/d/1_O5-Rb9EZElQN7EMh7R3XcRHO7ScA1Ae/edit">Resume</a></li>
             <li> <a className="smoothscroll" rel="noopener noreferrer" href="https://docs.google.com/document/d/1_O5-Rb9EZElQN7EMh7R3XcRHO7ScA1Ae/edit" target="_blank">
             Resume
                </a></li>
               <li><a className="smoothscroll" href="#portfolio">Project</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}