import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialstate
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    //const { name, job } = this.state

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form
