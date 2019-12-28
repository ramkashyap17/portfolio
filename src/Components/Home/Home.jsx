import React from 'react';
import '../../Stylesheets/App.css';

export default class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="content">
        <div className="home">
          <div className="home-header">
            <h1 className="home-header__text">Please Wait...</h1>
          </div>
          <h1 className="home-subheader">Connection to random server 1.12.123.235</h1>
          <div className="terminal">
            <div className="terminal-header">
              <div className="tab-title">
                <div className="close__button">
                  <img src="/cross-out.png" className="tab-title__close"/>
                </div>
                <div className="tab-title__text">Home</div>
              </div>
            </div>
            <div className="terminal-body">
              <div className="terminal-prompt">
                <span className="terminal-prompt-text">r@nd0m_t3rm!nal></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
