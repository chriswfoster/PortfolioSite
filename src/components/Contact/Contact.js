import React, { Component } from "react"

import "./contact.css"

export default class Contact extends Component {
  render() {
    return (
      <div className="contactbackground">
        <br />
        <div className="contactmainflex">
          <h1> CONTACT </h1>
          <div className="underlinebox" />
        </div>
        <h3>chriswfoster@gmail.com</h3>
        <h3>214-769-9691</h3>
       
        <div>
          <img href="https://github.com/chriswfoster" className="fa-github"
         src ={require('./github-icon.png')}/>
       
          <img
            href="https://www.linkedin.com/in/chriswfoster/" src={require('./linkedin-icon.png')}
            className="fa-linkedin"
         />
    
        </div>
      </div>
    )
  }
}
