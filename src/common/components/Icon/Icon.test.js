import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

describe('Icon', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<Icon type="material-ui" name="search" />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
