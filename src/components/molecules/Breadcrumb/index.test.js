import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Breadcrumb from '.'

describe('Breadcrumb', () => {
  it('renders correctly the component', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Breadcrumb />
      </MemoryRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
