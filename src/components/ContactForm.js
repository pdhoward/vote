import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch' // Fetch Polyfill

/*
  ⚠️ This is an example of a form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Vote1 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote2 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote3 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote4 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote5 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote6 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote7 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote8 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Vote9 = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 25px;
  resize: vertical;
`
const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      creative: '',
      disruptive: '',
      technical: '',
      entertain: '',
      social: '',
      cool: '',
      execution: '',
      design: '',
      project: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <Vote1
          name="creative"
          type="text"
          placeholder="Most Creative"
          value={this.state.creative}
          onChange={this.handleInputChange}
          required
        />
        <Vote2
          name="disruptive"
          type="text"
          placeholder="Most Disruptive"
          value={this.state.disruptive}
          onChange={this.handleInputChange}
          required
        />
        <Vote3
          name="technical"
          type="text"
          placeholder="Most Technically Challenging"
          value={this.state.technical}
          onChange={this.handleInputChange}
          required
        />
        <Vote4
          name="entertain"
          type="text"
          placeholder="Most Entertaining"
          value={this.state.entertain}
          onChange={this.handleInputChange}
          required
        />
        <Vote5
          name="social"
          type="text"
          placeholder="Most Socially Conscious"
          value={this.state.social}
          onChange={this.handleInputChange}
          required
        />
        <Vote6
          name="cool"
          type="text"
          placeholder="Highest Cool Factor"
          value={this.state.cool}
          onChange={this.handleInputChange}
          required
        />
        <Vote7
          name="execution"
          type="text"
          placeholder="Best Execution"
          value={this.state.execution}
          onChange={this.handleInputChange}
          required
        />
        <Vote8
          name="design"
          type="text"
          placeholder="Top Design (ui/ux)"
          value={this.state.design}
          onChange={this.handleInputChange}
          required
        />
        <Vote9
          name="project"
          type="text"
          placeholder="Top Project"
          value={this.state.project}
          onChange={this.handleInputChange}
          required
        />
        <Submit name="submit" type="submit" value="SUBMIT VOTE" />

        <Modal visible={this.state.showModal}>
          <p>
            Thank you for your vote!
          </p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
