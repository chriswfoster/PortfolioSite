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
          offsetXMin={-5}
          offsetXMax={30}
          slowerScrollRate
          tag="figure"
        >
          <div className="iconrowflex">
            <div>
              <img
                src={require("./icons/angularjs-icon.png")}
                alt="AngularJS"
             
              /><p>AngularJS</p>
            </div>
            <div>
              <img
                src={require("./icons/apache-icon.svg")}
             
              /><p>Apache2/Httpd</p>
            </div>
            <div>
              <img src={require("./icons/css-icon.svg")} /><p>CSS</p>
            </div>
            <div>
              <img src={require("./icons/express-icon.png")} /><p>Express</p>
            </div>
            <div>
              <img src={require("./icons/html5-icon.png")} /><p>HTML 5</p>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}
