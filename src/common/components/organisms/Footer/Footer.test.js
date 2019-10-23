import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Footer />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
