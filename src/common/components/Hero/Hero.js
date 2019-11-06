import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
}))

function Hero({ backgroundImage, children }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Typography className={classes.title} color="primary" align="center">
        {t('hero.title')}
      </Typography>
      {children}
    </div>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
}

Hero.defaultProps = {
  backgroundImage: '',
  children: '',
}

export default Hero
