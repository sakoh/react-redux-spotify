import React from 'react'
import { List } from '@material-ui/core/List'
import PropTypes from 'prop-types'
import { ArtistsListItem } from './ArtistListItem'
import { artistPropType } from './types'

const ArtistsList = ({ artists, title }) => (
  <div>
    <h1>{title}</h1>
    <List>
      {artists.map(({
        name,
        image,
        popularity
      }) => (
        <ArtistsListItem
          name={name}
          image={image}
          popularity={popularity}
        />
      ))}
    </List>
  </div>
)

ArtistsList.propTypes = {
  title: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape(artistPropType)
  ).isRequired,
}

export default ArtistsList
