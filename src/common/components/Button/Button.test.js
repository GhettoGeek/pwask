import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
