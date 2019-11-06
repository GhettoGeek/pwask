import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'

function EnhancedSelect({
  id, items, ...props
}) {
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <Select
      native
      id={id}
      variant="outlined"
      value={value}
      onChange={handleChange}
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
}

EnhancedSelect.defaultProps = {
  id: 'standard-select-native',
  items: [],
}

export default EnhancedSelect
