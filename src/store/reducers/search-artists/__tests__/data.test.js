import { searchArtistsSuccess } from '../../../actions'
import { artists } from '../../../../fixtures'
import { data as dataReducer } from '../data'

describe('reducer:search-artists:data', () => {
  it('should return an empty array by default', () => {
    const action = { type: 'foobar' }
    const result = dataReducer([], action)
    expect(result).toEqual([])
  })

  it('should return an array of artists upon receiving SEARCH_ARTISTS_SUCCESS', () => {
    const action = searchArtistsSuccess(artists)
    const result = dataReducer([], action)
    expect(result).toBe(artists)
  })
})
