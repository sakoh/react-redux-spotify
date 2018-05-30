import { combineReducers } from 'redux'
import relatedArtists from './related-artists'
import searchArtists from './search-artists'

export default combineReducers({ relatedArtists, searchArtists })
