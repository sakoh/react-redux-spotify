import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArtistList from '..'

configure({ adapter: new Adapter() })

describe('ArtistList', () => {
  it('should render correctly', () => {
    const artists = [
      {
        name: 'Iron Maiden',
        image: 'http://via.placeholder.com/350x150',
        popularity: 10,
      },
      {
        name: 'Metallica',
        image: 'http://via.placeholder.com/350x150',
        popularity: 10,
      },
      {
        name: 'Eminenm',
        image: 'http://via.placeholder.com/350x150',
        popularity: 10,
      },
    ]
    const wrapper = shallow(
      <ArtistList title='Great Artists' artists={artists} />  
    )

    expect(wrapper).toMatchSnapshot()
  })
})
