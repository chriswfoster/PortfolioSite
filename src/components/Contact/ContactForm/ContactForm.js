import React, { Component } from "react"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      company: "",
      phoneNumber: "",
      email: "",
      message: "",
      submitStatus: "true"
    }
    this.captchaHandler.bind = this.captchaHandler.bind(this)
  }

  captchaHandler = value => {
    console.log("Captcha value:", value)
    value != undefined
      ? this.setState({ submitStatus: "" })
      : alert("Captcha failed.")
  }

  handleText(e, type) {
    this.setState({ [type]: e.target.value })
  }

  submitter(e) {
    e.preventDefault()
    console.log("submitted")
    this.setState({ submitStatus: "true" })
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.submitter(e)}>
          <input
            type="text"
            placeholder="Name"
            onChange={e => this.handleText(e, "name")}
          />
          <input
            type="text"
            placeholder="Company (optional)"
            onChange={e => this.handleText(e, "company")}
          />
          <input
            type="text"
            placeholder="Phone number"
            onChange={e => this.handleText(e, "phoneNumber")}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={e => this.handleText(e, "email")}
          />
          <textarea
            type="text"
            placeholder="Type me a message"
            onChange={e => this.handleText(e, "message")}
          />
          <input type="submit" text="test" disabled={this.state.submitStatus} />
          <ReCAPTCHA
            ref="recaptcha"
            sitekey={process.env.REACT_APP_KEY}
            onChange={this.captchaHandler}
          />
        </form>
      </div>
    )
  }
}
export default ContactForm
