import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Card />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
