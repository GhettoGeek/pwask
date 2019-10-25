import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import Link from './Link'

describe('Link', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Link to="/">link</Link>
      </MemoryRouter>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
