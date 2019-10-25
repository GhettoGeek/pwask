import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
