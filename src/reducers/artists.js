import { GET_ARTISTS } from '../actions/types'

export const artists = (state, { type, payload }) => {
  if (type === GET_ARTISTS) return payload.artists

  return state.artists
}
