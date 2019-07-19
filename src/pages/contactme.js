import React, { Component } from 'react'

import Layout from '../components/layout'

class ContactForm extends Component {
  render() {
    return (
      <>
        <Layout>
          <h1 className="p-heading1">Get in Touch</h1>
          <p>
            For work/project related, email me at-{' '}
            <a
              href="mailto:eesh.tyagi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              eesh.tyagi@gmail.com
            </a>{' '}
          </p>
          <p>
            Have questions? You{' '}
            <a
              href="https://github.com/eeshdarthvader"
              target="_blank"
              rel="noopener noreferrer"
            >
              ask me anything.
            </a>
          </p>
          <p>
            If you just wish to connect, find me on twitter{' '}
            <a
              href="https://twitter.com/EtEesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              @EtEesh
            </a>{' '}
          </p>
        </Layout>
      </>
    )
  }
}

export default ContactForm
