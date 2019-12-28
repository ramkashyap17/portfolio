import React from 'react';
import '../../Stylesheets/App.css';
import ReactAnime from 'react-animejs'

const {Anime, stagger} = ReactAnime

let step = 0;

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.updateStep = this.updateStep.bind(this)
  }

  componentDidMount(){
    setTimeout(function(){ step = 1; }, 5000);
    // setTimeout(this.updateStep(1), 5000)
    // setTimeout(this.updateStep(2), 8000)
    // setTimeout(this.updateStep(3), 13000)
  }

  updateStep(s){
    step = s;
  }

  render(){
    return (
      <div className="content">
        <div className="home">
        {
          step === 0 &&
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
          step === 0 &&
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
          step === 0 &&
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
          step === 1 &&
          <div id="Box" className="home-header">
            <h1 className="home-header__text">PLEASE W A I T. . .</h1>
          </div>
        }
        {
          step === 2 &&
          <h1 className="home-subheader">ssh -i random_key.pub random_server@1.12.123.235</h1>
        }
        {
          step === 3 &&
          <div className="terminal">
            <div className="sterminal-header">
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
