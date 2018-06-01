import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class SearchForm extends Component {
  state = { value: '' }

  onInput = value => this.setState({ value })

  render () {
    return (
      <form>
        <TextField label='Search Artist' onInput={this.onInput} />
        <Button>Search</Button>
      </form>
    )
  }
}

export { SearchForm }
