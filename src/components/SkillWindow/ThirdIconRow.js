import React, { Component } from "react"
import "./secondwindow.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class ThirdIconRow extends Component {
  render() {
    return (
      <div>
      <Parallax
        className="custom-class"
       
        offsetXMin={0}
        offsetXMax={5}
        slowerScrollRate
        tag="figure"
      >
      <div className="iconrowflex">
  <img src={require("./icons/postgresql-icon.png")} />
  <img src={require("./icons/react-router-icon.svg")} />      
  <img src={require("./icons/reactjs-icon.png")} />
  <img src={require("./icons/redux-icon.png")} />
  <img src={require("./icons/socketio-icon.gif")} />
</div>
      </Parallax>
</div>

    )
  }
}
