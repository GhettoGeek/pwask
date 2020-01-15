import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Card
          id={1}
          title="Title"
          addToFavorites={() => {}}
          getDirectionUrl="https://www.google.com/maps?daddr=address"
        />
      </MemoryRouter>,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
