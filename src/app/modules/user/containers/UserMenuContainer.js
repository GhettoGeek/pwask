import React from 'react'
import { useSnackbar } from 'notistack'
import { useAuthContext } from '../../auth'
import UserMenu from '../components/UserMenu'

function UserMenuContainer() {
  const {
    isAuthenticated, user, loginWithRedirect, logout,
  } = useAuthContext()
  const { enqueueSnackbar } = useSnackbar()

  async function onActions(type) {
    if (type === 'login') {
      try {
        loginWithRedirect({})
      } catch (error) {
        enqueueSnackbar(error, { variant: 'error', persist: true })
      }
    }

    if (type === 'logout') {
      try {
        logout()
      } catch (error) {
        enqueueSnackbar(error, { variant: 'error', persist: true })
      }
    }
  }

  return (
    <UserMenu
      user={user}
      isAuthenticated={isAuthenticated}
      onActions={onActions}
    />
  )
}

export default UserMenuContainer
