import { GET_ARTISTS } from './types'

export const getArtists = (artists) => ({
  type: GET_ARTISTS,
  payload: { artists },
})
