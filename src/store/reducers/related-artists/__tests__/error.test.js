import { getRelatedArtistsFailed } from '../../../actions'
import { error as errorReducer } from '../error'

describe('reducer:related-artists:error', () => {
  it('should return null by default', () => {
    const action = { type: 'foobar' }
    const result = errorReducer(null, action)
    expect(result).toBe(null)
  })

  it('should return an error object upon receiving GET_RELATED_ARTISTS_FAILED', () => {
    const error = {
      message: 'You messed up!',
    }
    const action = getRelatedArtistsFailed(error)
    const result = errorReducer([], action)
    expect(result).toBe(error)
  })
})
