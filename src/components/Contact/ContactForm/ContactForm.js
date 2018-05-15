import React, { Component } from "react"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
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
    axios
      .post("/api/sendEmail", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
      .then(response => console.log(response))
    e.target.reset()
    console.log("submitted")
    this.setState({ submitStatus: "true" })
  }

  render() {
    return (
      <div style={{width: "100vw"}}>
        <form onSubmit={e => this.submitter(e)} className="contactFormFlex">
          <div>
            <p>NAME:</p>
            <input
              type="text"
              placeholder="Name"
              onChange={e => this.handleText(e, "name")}
            />
          </div>
          <div>
            <p>EMAIL:</p>
            <input
              type="text"
              placeholder="Email"
              onChange={e => this.handleText(e, "email")}
            />
          </div>
          <div>
            <p>MESSAGE:</p>
            <textarea
              type="text"
              placeholder="Type me a message"
              onChange={e => this.handleText(e, "message")}
            />
          </div>
          <div>
            <input
              type="submit"
              value="SEND MESSAGE"
              disabled={this.state.submitStatus}
            />
            <ReCAPTCHA
              ref="recaptcha"
              sitekey={process.env.REACT_APP_KEY}
              onChange={this.captchaHandler}
            />
          </div>
        </form>
      </div>
    )
  }
}
export default ContactForm
