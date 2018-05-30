import { GET_RELATED_ARTISTS_SUCCESS } from '../../actions/types'

export const data = (state = [], { type, payload }) => {
  if(type === GET_RELATED_ARTISTS_SUCCESS) {
    return payload.artists
  }

  return state
}
