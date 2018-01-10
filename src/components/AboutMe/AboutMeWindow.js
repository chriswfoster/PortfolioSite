import React, { Component } from "react"
import "./aboutme.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"
import AboutMe from "./AboutMe"

export default class AboutMeWindow extends Component {
  render() {
    return (
        <div className="aboutmewindow">
        <br />
        <ParallaxProvider>
            
          <AboutMe />
        </ParallaxProvider>
    </div>
    )
  }
}
