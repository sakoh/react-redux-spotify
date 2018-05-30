import { IN_FLIGHT } from '../../actions/types'
import { inFlight as inFlightReducer } from '../in-flight'

describe('Reducer/inFlight', () => {
  it('should return false by default', () => {
    const action = { type: 'foobar' }
    const result = inFlightReducer(null, action)

    expect(result).toBe(false)
  })

  it('should return true when receiving IN_FLIGHT', () => {
    const action = { type: IN_FLIGHT }
    const result = inFlightReducer(null, action)

    expect(result).toBe(true)
  })
})
