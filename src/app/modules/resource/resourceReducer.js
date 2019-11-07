import merge from 'lodash/merge'

export const resourceInitialState = {
  resources: {},
}

export const resourceReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESOURCE':
      return merge({}, state, {
        resources: {
          [action.resourceId]: action.payload,
        },
      })
    case 'SET_RESOURCES':
      return merge({}, state, {
        resources: action.payload,
      })
    default:
      return { ...state }
  }
}
