import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import List from './List'

const items = [
  {
    label: 'item1',
    link: '/item1',
  },
  {
    label: 'item2',
    link: '/item2',
  },
]

describe('List', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <List items={items} />
      </MemoryRouter>,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
