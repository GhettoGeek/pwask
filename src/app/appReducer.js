import merge from 'lodash/merge'
import assign from 'lodash/assign'

export const appInitialState = {
  dialog: {
    open: false,
  },
  formErrors: {},
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FORM_ERRORS':
      return merge({}, state, {
        formErrors: {
          [action.payload.formId]: {
            ...action.payload.errors,
          },
        },
      })
    case 'CLEAR_FORM_ERRORS':
      return assign({}, state, {
        formErrors: {},
      })
    default:
      return { ...state }
  }
}
