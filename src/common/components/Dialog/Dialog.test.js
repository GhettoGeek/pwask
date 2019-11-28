import React from 'react'
import { shallow } from 'enzyme'
import Dialog from './Dialog'

describe('Dialog', () => {
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
      <Dialog
        open
        title="Title"
        onClose={mockFunction}
      >
        Lorem ipsum dolor sit amet
      </Dialog>,
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
