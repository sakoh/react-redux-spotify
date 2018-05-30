import { SEARCH_ARTISTS_IN_FLIGHT } from '../../actions/types'

export const inFlight = (state = false, { type }) => {
  if (type === SEARCH_ARTISTS_IN_FLIGHT) return true

  return state
}
