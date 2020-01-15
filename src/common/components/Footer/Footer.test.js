import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Footer />
      </MemoryRouter>,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
