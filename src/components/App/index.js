import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import './index.css'
import { SearchForm } from '../SearchForm'
import { ArtistsList } from '../ArtistsList'
import { artists } from '../../fixtures'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SearchForm />
        <Grid container>
          <Grid xs={12} sm={6}>
            <ArtistsList title='Search Results' artists={artists} />
          </Grid>
          <Grid xs={12} sm={6}>
            <ArtistsList title='Related Artists' artists={artists} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export { App }
