import React from 'react'
import { shallow } from 'enzyme'
import Textfield from './Textfield'

describe('Textfield', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Textfield label="Textfield" />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
