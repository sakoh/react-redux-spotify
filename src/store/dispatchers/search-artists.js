import axios from 'axios'
import {
  searchArtistsSuccess,
  searchArtistsFailed,
} from '../actions'
import { GET_RELATED_ARTISTS_IN_FLIGHT } from '../actions/types'


const searchAritsts = () => async dispatch => {
  try {
    const response = await axios.get('/api/v1/search-artists')
    dispatch(searchArtistsSuccess(response))
  } catch (e) {
    dispatch(searchArtistsFailed(e))
  }
}
