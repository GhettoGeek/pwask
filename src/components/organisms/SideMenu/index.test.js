import React from 'react'
import renderer from 'react-test-renderer'

import SideMenu from '.'

describe('SideMenu', () => {
  it('renders correctly the component', () => {
    const tree = () => renderer.create(<SideMenu />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
