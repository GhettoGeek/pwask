import React from 'react'
import ResourceSearchBox from '../components/ResourceSearchBox'

const resourceTypes = [
  {
    label: 'Type1',
    value: 'Type1',
  },
  {
    label: 'Type2',
    value: 'Type2',
  },
  {
    label: 'Type3',
    value: 'Type3',
  },
]

function ResourceSearchBoxContainer() {
  return (
    <ResourceSearchBox resourceTypes={resourceTypes} />
  )
}

export default ResourceSearchBoxContainer
