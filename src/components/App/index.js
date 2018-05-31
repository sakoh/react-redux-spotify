import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import store from '../../store'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Max Artists</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  relatedArtists: state.relatedArtists.data,
  searchArtists: state.searchArtists.data,
})

export default App
