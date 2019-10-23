import _ from 'lodash'

export const appInitialState = {
  dialog: {
    open: false,
  },
  formErrors: {},
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FORM_ERRORS':
      return _.merge({}, state, {
        formErrors: {
          [action.payload.formId]: {
            ...action.payload.errors,
          },
        },
      })
    case 'CLEAR_FORM_ERRORS':
      return _.assign({}, state, {
        formErrors: {},
      })
    default:
      return { ...state }
  }
}
