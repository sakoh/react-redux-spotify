import React from 'react'
import { Avatar } from '@material-ui/core/Avatar'
import { ListItem } from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import { artistPropType } from '../types'

const ArtistListItem = ({
  name,
  image,
  popularity
}) => (
  <ListItem>
    <Avatar src={image} />
    <ListItemText primary={name} secondary={popularity} />
  </ListItem>  
)

ArtistListItem.propTypes = artistPropType

export default ArtistListItem
