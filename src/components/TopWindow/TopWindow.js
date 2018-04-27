import React, { Component } from "react"
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"
import "./topwindow.css"

export default class TopWindow extends Component {
  toAboutMe() {
    scroller.scrollTo("AboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="window">
        <div>
          <p className="topname">Chris Foster</p>
          <p>FULL STACK WEB DEVELOPER</p>
        </div>
        <img src={require("./arrow.png")} onClick={() => this.toAboutMe()} />
        <div className="statsDisplayFlex">
          <p>You scrolled a total of {this.props.scrolltotal} pixels!</p>
          <p>Mouse movement in Pixels: 0</p>
        </div>
      </div>
    )
  }
}
