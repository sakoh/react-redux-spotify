import React, { Component } from 'react'
import './index.css'
import { SearchForm } from '../SearchForm'
import { ArtistsList } from '../ArtistsList'
import { artists } from '../../fixtures'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SearchForm />
        <ArtistsList title='Search Results' artists={artists} />
      </div>
    )
  }
}

export { App }
