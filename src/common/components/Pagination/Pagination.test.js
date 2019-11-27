import React from 'react'
import { shallow } from 'enzyme'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('renders correctly the component', () => {
    const wrapper = shallow(
      <Pagination
        currentIndex={0}
        onChangeIndex={() => {}}
      />,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
