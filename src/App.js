import React from 'react';
import './Stylesheets/App.css';

import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import About from './Components/About/About'

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showPage: 0,
    }
  }
  render(){
    switch(this.state.showPage){
      case 0:
        return (
          <div className="App">
            <Home/>
          </div>
        );
      case 1:
        return (
          <div className="App">
            <Portfolio/>
          </div>
        );
      case 2:
        return (
          <div className="App">
            <Skills/>
          </div>
        );
      case 3:
        return (
          <div className="App">
            <Experience/>
          </div>
        );
      case 4:
        return (
          <div className="App">
            <About/>
          </div>
        );
      default:
      return (
        <div className="App">
          <Home/>
        </div>
      );
    }
  }
}
