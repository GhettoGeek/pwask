import merge from 'lodash/merge'
import { storageUtil } from '../../../common/utils'

export const resourceInitialState = {
  resources: {},
  favorites: storageUtil.get('favorites') || [],
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
    case 'SET_FAVORITES':
      return merge({}, state, {
        favorites: action.payload,
      })
    case 'ADD_FAVORITE': {
      const { favorites } = state

      if (favorites.includes(action.id)) {
        favorites.splice(favorites.indexOf(action.id), 1)
      } else {
        favorites.push(action.id)
      }

      storageUtil.set('favorites', favorites)

      return merge({}, state, {
        favorites,
      })
    }
    case 'DELETE_FAVORITE': {
      const { favorites } = state

      favorites.filter((id) => id !== action.id)

      storageUtil.set('favorites', favorites)

      return merge({}, state, {
        favorites,
      })
    }
    default:
      return { ...state }
  }
}
