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
  constructor() {
    super()
    this.state = {
      previous: 0,
      total: 0,
      mouseXPrevious: 0,
      mouseYPrevious: 0,
      mouseXTotal: 0,
      mouseYTotal: 0,
      overallTotal: 0
    }
  }

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

  scroller() {
    this.state.previous === 0
      ? this.setState({ previous: window.pageYOffset })
      : null
    let current = window.pageYOffset
    const { previous } = this.state
    let total = this.state.total
    total += previous > current ? previous - current : current - previous
    this.setState({ previous: current, total })
  }

  mouseTracker(e) {
    this.state.mouseXPrevious === 0
      ? this.setState({ mouseXPrevious: e.clientX })
      : null
    this.state.mouseYPrevious === 0
      ? this.setState({ mouseYPrevious: e.clientY })
      : null

    let currentX = e.clientX
    let currentY = e.clientY
    const { mouseXPrevious, mouseYPrevious } = this.state
    let totalX = this.state.mouseXTotal
    let totalY = this.state.mouseYTotal
    totalX +=
      mouseXPrevious > currentX
        ? mouseXPrevious - currentX
        : currentX - mouseXPrevious
    totalY +=
      mouseYPrevious > currentY
        ? mouseYPrevious - currentY
        : currentY - mouseYPrevious
    this.setState({
      mouseXTotal: totalX,
      mouseYTotal: totalY,
      overallTotal: Math.floor((totalY + totalX) / 15500)
    })

  }

  render() {
    window.onscroll = () => this.scroller()
    // window.onmousemove = e => this.mouseTracker(e)



    var Scroll = require("react-scroll")
    var scroll = Scroll.animateScroll
    return (
      <div clasName="homeoverflow">
        <div className="navbarbox">
          <img src={require("./C.png")} />
          <div className="navflex">
            <div onClick={() => this.goToAboutMe()}>About Me</div>

            <div onClick={() => this.goToProjects()}>My Projects</div>

            <div onClick={() => this.goToSkills()}>Some of my Skillset</div>
            <div onClick={() => scroll.scrollToBottom()}> Contact </div>
          </div>
        </div>

        <div className="backgroundimage"> </div>
        <TopWindow scrolltotal={this.state.total} mousetotal={this.state.overallTotal} />
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
