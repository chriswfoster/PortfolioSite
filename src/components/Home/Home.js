import React, { Component } from "react"
import TopWindow from "../TopWindow/TopWindow"
import AboutMeWindow from "../AboutMe/AboutMeWindow"
import SkillWindow from "../SkillWindow/SkillWindow"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import NavBar from "../NavBar/NavBar"
import "./home.css"
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll"
class Home extends Component {
  goToAboutMe() {
    scroller.scrollTo("AboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }

  goToProjects() {
    scroller.scrollTo("Projects", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  goToSkills() {
    scroller.scrollTo("Skills", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  render() {
    var Scroll = require("react-scroll")
    var scroll = Scroll.animateScroll
    return (
      <div>
        <div className="navbarbox">
          <img src={require("../AboutMe/linkedin.jpg")} />
          <div className="navflex">
            <div onClick={() => this.goToAboutMe()}>About Me</div>

            <div onClick={() => this.goToProjects()}>To the Projects!</div>

            <div onClick={() => this.goToSkills()}>Some of my skillset!</div>
            <div onClick={() => scroll.scrollToBottom()}> CONTACT </div>
          </div>
        </div>

        <div className="backgroundimage"> </div>
        <TopWindow />
        <Element name="AboutMe" />
        <AboutMeWindow />
        <Element name="Projects" />
        <Projects />
        <Element name="Skills" />
        <SkillWindow />
        <Contact />
      </div>
    )
  }
}

export default Home
