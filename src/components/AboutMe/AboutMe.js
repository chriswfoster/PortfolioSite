import React, { Component } from "react"
import "./aboutme.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class AboutMe extends Component {
  render() {
    return (
      <Parallax
        className="custom-class"
        offsetYMin={40}
        offsetYMax={-35}
        offsetXMin={0}
        offsetXMax={0}
        slowerScrollRate
        tag="figure"
      >
        <div className="aboutmeflex">
          <img src={require("./linkedin.jpg")} className="aboutmeprofilepic" />
          <h1 className="aboutmetext">
            Hi, my name is Chris Foster. I'm a Full Stack Web Developer with
            React, Redux, Router, AngularJS, Node/Express, Socket.io,
            SQL/PostgreSQL, and RESTful API experience. I'm transferring from an
            IT background into the exciting world of Web Development!
          </h1>
        </div>
      </Parallax>
    )
  }
}
