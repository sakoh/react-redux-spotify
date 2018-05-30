import { GET_RELATED_ARTISTS_IN_FLIGHT } from '../../actions/types'

export const inFlight = (state = false, { type }) => {
  if (type === GET_RELATED_ARTISTS_IN_FLIGHT) return true

  return state
}
