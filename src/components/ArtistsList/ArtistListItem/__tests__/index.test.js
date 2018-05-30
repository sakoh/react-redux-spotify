import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PropTypes from 'prop-types'
import ArtistListItem from '..'

configure({ adapter: new Adapter() })

describe('ArtistsListItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ArtistListItem
        name='Iron Maiden'
        image='http://via.placeholder.com/350x150'
        popularity={10} 
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
