import React from 'react'
import { shallow } from 'enzyme'
import BottomNavigation from './BottomNavigation'

describe('BottomNavigation', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<BottomNavigation />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
