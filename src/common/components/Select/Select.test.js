import React from 'react'
import { shallow } from 'enzyme'
import Select from './Select'

describe('Select', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Select />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
