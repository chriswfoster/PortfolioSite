import React, { Component } from "react"
import "./aboutme.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class ProfilePicPara extends Component {
  render() {
    return (
      <Parallax
        className="custom-class"
        offsetYMin={75}
        offsetYMax={0}
        offsetXMax={-30}
        offsetXMin={-30}
        slowerScrollRate
        tag="figure"
      >
        <img src={require("./linkedin.jpg")} className="aboutmeprofilepic" />
      </Parallax>
    )
  }
}
