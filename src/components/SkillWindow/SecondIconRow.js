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
          offsetXMax={-5}
          slowerScrollRate
          tag="figure"
        >
          <div className="iconrowflex">
            <img src={require("./icons/javascript-icon.png")} />
            <img src={require("./icons/massive-icon.jpg")} />
            <img src={require("./icons/Momentjs-icon.png")} />
            <img src={require("./icons/nginx-icon.png")} />
            <img src={require("./icons/node-icon.png")} />
          </div>
        </Parallax>
      </div>
    )
  }
}
