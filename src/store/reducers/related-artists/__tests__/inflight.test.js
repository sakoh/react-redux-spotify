import { GET_RELATED_ARTISTS_IN_FLIGHT } from '../../../actions/types'
import { inFlight as inFlightReducer } from '../in-flight'

describe('reducer:related-artists:in-flight', () => {
  it('should return false by default', () => {
    const action = { type: 'fa' }
    const result = inFlightReducer(undefined, action)

    expect(result).toBe(false)
  })

  it('should return true upon receiving GET_RELATED_ARTISTS_IN_FLIGHT', () => {
    const action = { type: GET_RELATED_ARTISTS_IN_FLIGHT }
    const result = inFlightReducer(undefined, action)

    expect(result).toBe(true)
  })
})
