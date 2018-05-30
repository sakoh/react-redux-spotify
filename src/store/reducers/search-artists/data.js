import { SEARCH_ARTISTS_SUCCESS } from '../../actions/types'

export const data = (state = [], { type, payload }) => {
  if(type === SEARCH_ARTISTS_SUCCESS) {
    return payload.artists
  }

  return state
}
