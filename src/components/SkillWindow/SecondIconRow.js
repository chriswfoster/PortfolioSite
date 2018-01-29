import React, { Component } from "react"
import "./secondwindow.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class SecondIconRow extends Component {
  render() {
    return (
      <div>
        <Parallax
          className="custom-class"
          offsetXMin={0}
          offsetXMax={-15}
          slowerScrollRate
          tag="figure"
        >
          <div className="iconrowflex">
            <div>
              <img src={require("./icons/javascript-icon.png")} />
              <p>Javascript</p>
            </div>
            <div>
              <img src={require("./icons/massive-icon.jpg")} />
              <p>Massive</p>
            </div>
            <div>
              <img src={require("./icons/Momentjs-icon.png")} />
              <p>Moment.js</p>
            </div>
            <div>
              <img src={require("./icons/nginx-icon.png")} />
              <p>NGiNX</p>
            </div>
            <div>
              <img src={require("./icons/node-icon.png")} />
              <p>Node.js</p>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}
