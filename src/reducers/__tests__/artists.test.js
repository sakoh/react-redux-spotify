import { artists } from '../../fixtures'
import { getArtists } from '../../actions'
import { artists as artistsReducer } from '../artists'

describe('Reducer/artists', () => {
  it('should return state.artists by default', () => {
    const state = { artists: [] }
    const action = { type: 'foobar' }
    const result = artistsReducer(state, action)

    expect(result).toEqual([])
  })

  it('should return new artists upon receiving GET_ARTISTS', () => {
    const state = { artists: [] }
    const action = getArtists(artists)
    const result = artistsReducer(state, action)

    expect(result).toBe(artists)
  })
})
