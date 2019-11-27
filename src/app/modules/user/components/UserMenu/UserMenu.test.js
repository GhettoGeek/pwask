import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import UserAccount from './UserMenu'

const user = {
  name: 'User Test',
  email: 'user.test@mail.com',
}

describe('UserAccount', () => {
  let mockFunction

  beforeEach(() => {
    mockFunction = jest.fn()
    mockFunction.mockReturnValue('test')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly the component', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <UserAccount user={user} onActions={mockFunction} />
      </MemoryRouter>,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
