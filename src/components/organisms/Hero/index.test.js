import React from 'react'
import renderer from 'react-test-renderer'

import Hero from '.'

describe('Hero', () => {
  it('renders correctly the component', () => {
    const tree = () => renderer.create(<Hero />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
