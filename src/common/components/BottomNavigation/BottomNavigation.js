import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      showLabels
      className={classes.root}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction label={t('common.recents')} icon={<RestoreIcon />} />
      <BottomNavigationAction label={t('common.favorites')} icon={<FavoriteIcon />} />
      <BottomNavigationAction label={t('common.nearby')} icon={<LocationOnIcon />} />
    </BottomNavigation>
  )
}
