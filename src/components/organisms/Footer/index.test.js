import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '.'

describe('Footer', () => {
  it('Should render the component as expected', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
