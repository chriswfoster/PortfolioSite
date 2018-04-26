import React, { Component } from "react"
import "./secondwindow.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class ThirdIconRow extends Component {
  render() {
    return (
      <Parallax
        className="custom-class"
        offsetXMin={0}
        offsetXMax={15}
        slowerScrollRate
        tag="figure"
      >
        <div className="iconrowflex">
          <div>
            {" "}
            <img src={require("./icons/postgresql-icon.png")} />
            <p>PostgreSQL</p>
          </div>
          <div>
            <img src={require("./icons/react-router-icon.svg")} />
            <p>React-Router</p>
          </div>
          <div>
            <img src={require("./icons/reactjs-icon.png")} />
            <p>React.js</p>
          </div>
          <div>
            <img src={require("./icons/redux-icon.png")} />
            <p>React-Redux</p>
          </div>
          <div>
            <img src={require("./icons/socketio-icon.gif")} />
            <p>Socket.io</p>
          </div>
        </div>
      </Parallax>
    )
  }
}
