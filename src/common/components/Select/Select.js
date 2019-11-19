import React from 'react'
import PropTypes from 'prop-types'
import { Select } from '@material-ui/core'

function EnhancedSelect({
  id, items, handleChange, ...props
}) {
  const [value, setValue] = React.useState('')
  const onChange = (event) => {
    setValue(event.target.value)
    handleChange(event)
  }

  return (
    <Select
      native
      id={id}
      variant="outlined"
      value={value}
      onChange={onChange}
      {...props}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  )
}

EnhancedSelect.propTypes = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  handleChange: PropTypes.func,
}

EnhancedSelect.defaultProps = {
  id: 'standard-select-native',
  items: [],
  handleChange: () => {},
}

export default EnhancedSelect
