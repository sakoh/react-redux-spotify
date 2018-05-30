import { SEARCH_ARTISTS_FAILED } from '../../actions/types'

export const error = (state = null, { type, payload }) => {
  if(type === SEARCH_ARTISTS_FAILED) {
    return payload.error
  }

  return state
}
