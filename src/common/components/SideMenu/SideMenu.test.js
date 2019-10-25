import React from 'react'
import { shallow } from 'enzyme'
import SideMenu from './SideMenu'

describe('SideMenu', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<SideMenu />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
