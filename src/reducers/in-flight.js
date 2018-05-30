import { IN_FLIGHT } from '../actions/types'
export const inFlight = (state, { type }) => {
  if (type === IN_FLIGHT) return true

  return false
}
