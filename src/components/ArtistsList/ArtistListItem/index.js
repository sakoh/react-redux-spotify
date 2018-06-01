import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { artistPropType } from '../types'

const ArtistsListItem = ({
  name,
  image,
  popularity
}) => (
  <ListItem>
    <Avatar src={image} />
    <ListItemText primary={name} />
  </ListItem>  
)

ArtistsListItem.propTypes = artistPropType

export { ArtistsListItem }
