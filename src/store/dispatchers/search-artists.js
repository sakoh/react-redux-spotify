import { axiosInstance } from './axios-instance'
import {
  searchArtistsSuccess,
  searchArtistsFailed,
} from '../actions'
import { SEARCH_ARTISTS_IN_FLIGHT } from '../actions/types'


const searchAritsts = (searchQuery) => async dispatch => {
  dispatch({
    type: SEARCH_ARTISTS_IN_FLIGHT,
  })
  try {
    const response = await axiosInstance.get(`search?q=${searchQuery}&type=artist`)
    dispatch(searchArtistsSuccess(response))
  } catch (e) {
    dispatch(searchArtistsFailed(e))
  }
}
