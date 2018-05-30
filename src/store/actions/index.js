import {
  GET_RELATED_ARTISTS_SUCCESS,
  GET_RELATED_ARTISTS_FAILED,
  SEARCH_ARTISTS_SUCCESS,
  SEARCH_ARTISTS_FAILED,
} from './types'

export const getRelatedArtistsSuccess = (artists) => ({
  type: GET_RELATED_ARTISTS_SUCCESS,
  payload: { artists },
})

export const getRelatedArtistsFailed = (error) => ({
  type: GET_RELATED_ARTISTS_FAILED,
  payload: { error },
})

export const searchArtistsSuccess = (artists) => ({
  type: SEARCH_ARTISTS_SUCCESS,
  payload: { artists },
})

export const searchArtistsFailed = (error) => ({
  type: SEARCH_ARTISTS_FAILED,
  payload: { error },
})
