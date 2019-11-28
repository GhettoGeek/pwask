import React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
} from '@material-ui/core'

function EnhancedDialog({
  open, title, onClose, children, actions,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      maxWidth="lg"
    >
      {title && (
        <DialogTitle id="dialog-title">
          {title}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      {actions && (
        <DialogActions>{actions}</DialogActions>
      )}
    </Dialog>
  )
}

EnhancedDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
}

EnhancedDialog.defaultProps = {
  title: null,
  actions: null,
}

export default EnhancedDialog
