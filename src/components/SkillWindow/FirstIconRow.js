import React, { Component } from "react"
import "./secondwindow.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class FirstIconRow extends Component {
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
  <img src={require("./icons/angularjs-icon.png")} />
  <img src={require("./icons/apache-icon.svg")} className="rotate270" />      
  <img src={require("./icons/css-icon.svg")} />
  <img src={require("./icons/express-icon.png")} />
  <img src={require("./icons/html5-icon.png")} />
</div>
      </Parallax>
</div>

    )
  }
}
