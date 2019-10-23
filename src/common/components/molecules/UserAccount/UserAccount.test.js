import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import UserAccount from './UserAccount'

const user = {
  name: 'John Doe',
  email: 'john.doe@mail.com',
}

describe('UserAccount', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <UserAccount user={user} />
      </MemoryRouter>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
