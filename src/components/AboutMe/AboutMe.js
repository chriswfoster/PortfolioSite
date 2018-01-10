import React, { Component } from "react"
import "./aboutme.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"

export default class AboutMe extends Component {
  render() {
    return (
     
      <Parallax
        className="custom-class"
     
        offsetXMin={0}
        offsetXMax={-5}
        slowerScrollRate
        tag="figure"
      >
       <div> Full Stack Web Developer with React library, Redux, Router, AngularJS, Node/Express, Socket.io, SQL/PostgreSQL,
and REST experience. Transferring from an IT background into Web Development.</div>
      </Parallax>
     
    )
  }
}
