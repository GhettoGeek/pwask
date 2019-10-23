import React from 'react'
import { shallow } from 'enzyme'
import Typography from '.'

describe('Typography', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Typography />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
