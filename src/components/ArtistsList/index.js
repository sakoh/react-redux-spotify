import React, { Component } from 'react'
import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import { ArtistsListItem } from './ArtistListItem'
import { artistPropType } from './types'

class ArtistsList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape(artistPropType)
    ).isRequired,
  }

  renderArtists = artists => artists.map(({
    name,
    image,
    popularity,
  }) => (
    <ArtistsListItem
      name={name}
      image={image}
      popularity={popularity}
    />
  ))

  render () {
    const { artists, title } = this.props
    return  (
      <div>
        <h1>{title}</h1>
        <List>
          {this.renderArtists(artists)}
        </List>
      </div>
    )
  }
}

export { ArtistsList }
