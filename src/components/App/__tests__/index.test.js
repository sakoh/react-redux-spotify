import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '..'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
