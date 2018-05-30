import { GET_RELATED_ARTISTS_FAILED } from '../../actions/types'

export const error = (state = null, { type, payload }) => {
  if(type === GET_RELATED_ARTISTS_FAILED) {
    return payload.error
  }

  return state
}
