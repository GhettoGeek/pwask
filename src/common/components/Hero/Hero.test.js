import React from 'react'
import { shallow } from 'enzyme'
import Hero from './Hero'

describe('Hero', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Hero />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
