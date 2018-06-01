import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import store from '../../store'
import './index.css'

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <header className = "App-header" >
          <img src={logo} className = "App-logo" alt = "logo" />
          <h1 className="App-title"> Welcome to Max Artists </h1> 
        </header> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  relatedArtists: state.relatedArtists.data,
  searchArtists: state.searchArtists.data,
})

export default App
