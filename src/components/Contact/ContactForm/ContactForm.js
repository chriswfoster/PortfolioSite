import React, { Component } from "react"

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      company: "",
      phoneNumber: "",
      email: "",
      message: ""
    }
  }

  handleText(e, type) {}

  render() {
    return (
      <div>
        <form>
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
          <input
            type="text"
            placeholder="Type me a message"
            onChange={e => this.handleText(e, "message")}
          />
          <input type="submit" text="test" />
        </form>
      </div>
    )
  }
}
export default ContactForm
