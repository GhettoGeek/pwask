import React from 'react'
import { shallow } from 'enzyme'
import Loader from './Loader'

describe('Loader', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Loader />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
