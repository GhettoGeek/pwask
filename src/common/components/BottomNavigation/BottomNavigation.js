import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
} from '@material-ui/icons'

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