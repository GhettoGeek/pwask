import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

function EnhancedTextfield({
  id, label, variant, error, helperText,
}) {
  const classes = useStyles()
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (
    <TextField
      id={id}
      label={label}
      margin="normal"
      variant={variant}
      value={value}
      className={classes.textField}
      error={error}
      helperText={helperText}
      onChange={handleChange}
      inputProps={{
        'aria-label': label,
      }}
    />
  )
}

EnhancedTextfield.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
}

EnhancedTextfield.defaultProps = {
  id: 'standard-textfield',
  label: '',
  variant: 'standard',
  error: false,
  helperText: null,
}

export default EnhancedTextfield
