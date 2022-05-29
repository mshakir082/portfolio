import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-shakir-hussain/" target="_blank">
              <h4>Linked in :
                 <p style={{color:"gray"}}>{resumeData.linkedinId}</p> 
                </h4>
                </a>
                
                <a rel="noopener noreferrer" href="https://github.com/mshakir082" target="_blank">
                <h4>Github  :
                  <p style={{color:"gray"}}>{resumeData.Gmail}</p>
                </h4>
                </a>
               
                
              </div>
            </aside>
          </div>
        </section>
        );
  }
}