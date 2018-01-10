import React, { Component } from "react"
import "./aboutme.css"
import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"
import AboutMe from "./AboutMe"
import ProfilePicPara from "./ProfilePicPara"

export default class AboutMeWindow extends Component {
  render() {
    return (
      <div className="aboutmewindow">
        <br />

        <span>
          <ParallaxProvider>
            <ProfilePicPara />
          </ParallaxProvider>
          <ParallaxProvider>
            <AboutMe />
          </ParallaxProvider>
        </span>
      </div>
    )
  }
}
