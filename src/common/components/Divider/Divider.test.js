import React from 'react'
import { shallow } from 'enzyme'
import Divider from './Divider'

describe('Divider', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Divider orientation="vertical" />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
