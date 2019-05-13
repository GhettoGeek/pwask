import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '.'

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Footer />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
