import { getRelatedArtistsSuccess } from '../../../actions'
import { artists } from '../../../../fixtures'
import { data as dataReducer } from '../data'

describe('reducer:related-artists:data', () => {
  it('should return an empty array by default', () => {
    const action = { type: 'foobar' }
    const result = dataReducer([], action)
    expect(result).toEqual([])
  })

  it('should return an array of artists upon receiving GET_RELATED_ARTISTS_SUCCESS', () => {
    const action = getRelatedArtistsSuccess(artists)
    const result = dataReducer([], action)
    expect(result).toBe(artists)
  })
})
