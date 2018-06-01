import { axiosInstance } from './axios-instance'
import {
    getRelatedArtistsSuccess,
    getRelatedArtistsFailed,
} from '../actions'
import { GET_RELATED_ARTISTS_IN_FLIGHT } from '../actions/types'


const searchAritsts = (artistId) => async dispatch => {
    dispatch({
        type: GET_RELATED_ARTISTS_IN_FLIGHT,
    })
    try {
        const response = await axiosInstance.get(`artists/${artistId}/related-artists`)
        dispatch(getRelatedArtistsSuccess(response))
    } catch (e) {
        dispatch(getRelatedArtistsFailed(e))
    }
}
