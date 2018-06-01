import axios from 'axios'
import {
  searchArtistsSuccess,
  searchArtistsFailed,
} from '../actions'
import {
  SEARCH_ARTISTS_IN_FLIGHT
} from '../actions/types'


const searchAritsts = (searchQuery) => async dispatch => {
  dispatch({
    type: SEARCH_ARTISTS_IN_FLIGHT,
  })
  try {
    const response = await axios.get(`/api/v1/search-artists?q=${searchQuery}`)
    dispatch(searchArtistsSuccess(response))
  } catch (e) {
    dispatch(searchArtistsFailed(e))
  }
}
