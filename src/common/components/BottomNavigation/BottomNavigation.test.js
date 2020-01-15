import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import BottomNavigation from './BottomNavigation'

describe('BottomNavigation', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <BottomNavigation />
      </MemoryRouter>,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
