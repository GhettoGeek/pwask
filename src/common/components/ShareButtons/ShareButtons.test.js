import React from 'react'
import { shallow } from 'enzyme'
import ShareButtons from './ShareButtons'

describe('ShareButtons', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(<ShareButtons />)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
