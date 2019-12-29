import React from 'react';
import '../../Stylesheets/App.css';
import ReactAnime from 'react-animejs'

const {Anime, stagger} = ReactAnime


export default class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      step: 0,
      connectionStatus: 'CONNECTING',
    }
    this.updateStep = this.updateStep.bind(this)
    this.updateText = this.updateText.bind(this)
  }

  componentDidMount(){
    setTimeout(this.updateStep, 5000);
    setTimeout(this.updateText, 7000);
    setTimeout(this.updateText, 9000)
    setTimeout(this.updateText, 11000)
    setTimeout(this.updateStep, 14000)
  }

  updateText(){
    switch(this.state.connectionStatus){
      case 'CONNECTING':
        this.setState({
          step: 1,
          connectionStatus: 'PLEASE WAIT . . . '
        })
        break;
      case 'PLEASE WAIT . . . ':
        this.setState({
          step: 1,
          connectionStatus: 'ESTABLISHING'
        })
        break;
      case 'ESTABLISHING':
        this.setState({
          step: 1,
          connectionStatus: 'SESSION'
        })
        break;
    }
  }

  updateStep(s){
    switch(this.state.step){
      case 0:
        this.setState({
          step: 1,
        })
        break;
      case 1:
        this.setState({
          step: 3,
        })
        break;
      case 2:
        this.setState({
          step: 3,
        })
        break;
    }
  }

  render(){
    return (
      <div className="content">
        <div className="home">
        {
          this.state.step === 0 &&
          <Anime
          initial={[
            {
              targets: "#circle",
              keyframes: [
                {
                  translateX: 50
                },
                {
                  translateY: 50
                },
                {
                  translateX: 0
                },
                {
                  translateY: 0
                }
              ],
              // easing:'spring',
              duration: 3500,
              loop: true
            }
          ]}
          >
            <div id="circle" className="home-subheader" style={{ marginBottom: 50, marginRight: 50, height: 20, width: 20, background: "#bc13fe", borderRadius: "50%" }}/>
          </Anime>
        }
        {
          this.state.step === 0 &&
          <Anime
          initial={[
            {
              targets: "#circle",
              keyframes: [
                {
                  translateX: 50
                },
                {
                  translateY: 50
                },
                {
                  translateX: 0
                },
                {
                  translateY: 0
                }
              ],
              // easing:'spring',
              duration: 3500,
              loop: true
            }
          ]}
          >
            <div id="circle" className="home-subheader" style={{ marginBottom: 50, marginRight: 50, height: 30, width: 30, background: "#39ff14", borderRadius: "50%" }}/>
          </Anime>
        }
        {
          this.state.step === 0 &&
          <Anime
          initial={[
            {
              targets: "#circle3",
              keyframes: [
                {
                  translateX: 50,
                  color: "#fff",
                  backgroundColor: ["rgba(55, 255, 20, 1)", "rgba(20, 255, 251, 1)"],
                  loop: true,
                  direction: 'alternate',
                },
                {
                  translateY: 50,
                  color: "#ff0",
                  backgroundColor: ["rgba(20, 255, 251, 1)", "rgba(255, 255, 20, 1)"],
                  loop: true,
                  direction: 'alternate',
                },
                {
                  translateX: 0,
                  color: "#f00",
                  backgroundColor: ["rgba(255, 255, 20, 1)", "rgba(255, 157, 20, 1)"],
                  loop: true,
                  direction: 'alternate',
                },
                {
                  translateY: 0,
                  color: "#000",
                  backgroundColor: ["rgba(255, 157, 20, 1)", "rgba(255, 20, 20, 1)"],
                  loop: true,
                  direction: 'alternate',
                },
              ],
              // easing:'spring',
              duration: 3500,
              loop: true
            }
          ]}
          >
            <div id="circle3" className="home-subheader" style={{ marginBottom: 50, marginRight: 50, height: 40, width: 40, background: "#7d12ff", borderRadius: "50%" }}/>
          </Anime>
        }
        {
          this.state.step === 1 &&
          <Anime
          initial={[
            {
              targets: "#Box",
              keyframes: [
                {
                  opacity: 0
                },
                {
                  opacity: 1
                },
              ],
              // easing:'spring',
              duration: 800,
              loop: true
            }
          ]}
          >
            <div id="Box" className="home-header">
              <h1 className="home-header__text">{this.state.connectionStatus}</h1>
            </div>
          </Anime>
        }
        {/*
          this.state.step === 0 &&
          <h1 className="home-subheader">ssh -i random_key.pub random_server@1.12.123.235</h1>
        */}
        {
          this.state.step === 3 &&
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
        }
        </div>
      </div>
    );
  }
}
