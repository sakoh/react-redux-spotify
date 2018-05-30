import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PropTypes from 'prop-types'
import SearchForm from '..'

configure({ adapter: new Adapter() })

describe('SearchForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SearchForm />)

    expect(wrapper).toMatchSnapshot()
  })
})
