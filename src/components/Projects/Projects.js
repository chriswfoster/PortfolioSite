import React, { Component } from "react"
import "./projects.css"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

export default class Projects extends Component {
  render() {
    return (
      <div className="thirdwindow">
        <br />
        <div>
          <h1>Portfolio:</h1>
          <h3>
            <i>Recently Completed Projects</i>
          </h3>
        </div>
        <div className="projecttilesflex">
          <ScrollAnimation
            animateIn="zoomIn"
            duration=".25"
            animateOut="zoomOut"
          >
            <a
              href="http://dream.chriswf.com"
              style={{ textDecoration: "none"}}
              className="projectlinks"
            >
              <img
                src={require("./DreamScreenshot.png")}
                className="projectpictiles"
              />
              <h2>Dream Notes</h2>
            </a>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="zoomIn"
            delay="400"
            duration=".25"
            animateOut="zoomOut"
          >
            <a
              href="http://reactgiphy.chriswf.com"
              style={{ textDecoration: "none",}}
              className="projectlinks"
            >
              <img
                src={require("./GiphyScreenshot.png")}
                className="projectpictiles"
              />
              <h2>Giphy Search Tool (React Variant)</h2>
            </a>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="zoomIn"
            duration=".25"
            delay="800"
            animateOut="zoomOut"
          >
            <a
              href="http://q2.devmountain.review"
              style={{ textDecoration: "none"}}
              className="projectlinks"
            >
              <img
                src={require("./QueueScreenshot.png")}
                className="projectpictiles"
              />
              <h2>Student Help Queue</h2>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}
