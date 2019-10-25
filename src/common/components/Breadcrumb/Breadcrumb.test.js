import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Breadcrumb />
      </MemoryRouter>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
