import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArtistList from '..'
import { artists } from '../../../fixtures'

configure({ adapter: new Adapter() })

describe('ArtistList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ArtistList title='Great Artists' artists={artists} />  
    )

    expect(wrapper).toMatchSnapshot()
  })
})
