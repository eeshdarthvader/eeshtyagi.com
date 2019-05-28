import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

import Layout from '../components/layout'

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    valid: {
      name: true,
      email: true,
      subject: true,
      message: true,
    },
  }

  handleSubmit(e) {
    e.preventDefault()

    const { name, email, subject, message } = this.state

    if (!this.validate()) {
      return
    }

    let templateParams = {
      from_name: email,
      to_name: 'eesh.tyagi@gmail.com',
      subject: subject,
      message_html: message,
    }

    emailjs.send(
      'gmail',
      'template_jIXVJIkp',
      templateParams,
      'user_vRgEWhgAiiKQqh6ToSRHk'
    )

    this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  isValidEmail = email => {
    const pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    return pattern.test(email)
  }

  validate = () => {
    const { name, email, subject, message } = this.state

    // if (email === '') {
    //   return false
    // } else if (name === 'email') {
    //   return this.isValidEmail(e.target.value)
    // }

    if (email !== '' && name !== '' && (subject !== '') & (message !== '')) {
      return true
    }

    for (var key in this.state) {
      if (this.state[key] === '') {
        this.setState({ valid: { [key]: false } })
      }
    }
  }

  render() {
    return (
      <>
        <Layout>
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                valid={this.state.valid.email}
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
              <FormFeedback valid={this.validate.bind(this, 'email')}>
                Sweet! that name is available
              </FormFeedback>
            </FormGroup>

            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>

            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>

            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Layout>
      </>
    )
  }
}

export default ContactForm
