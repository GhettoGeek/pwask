import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import UserAccount from '.'

const user = {
  name: 'John Doe',
  email: 'john.doe@mail.com',
}

describe('UserAccount', () => {
  it('renders correctly the component', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <UserAccount user={user} />
      </MemoryRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
