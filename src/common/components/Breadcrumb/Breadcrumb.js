import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import Link from '../Link'
import Typography from '../Typography'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    width: 20,
    height: 20,
  },
}))

const BreadCrumb = ({ location }) => {
  const classes = useStyles()
  const crumbs = location.pathname.split('/').filter(Boolean)

  return crumbs.length > 0 ? (
    <Breadcrumbs aria-label="Breadcrumb">
      <Link color="inherit" to="/">
        <HomeIcon className={classes.icon} />
      </Link>
      {
        crumbs.map((item, index) => {
          if (crumbs.length === index + 1) {
            return <Typography variant="body1" key={index}>{item}</Typography>
          }

          const link = crumbs.slice(0, index + 1).join('/')

          return <Link to={`/${link}`} key={index}>{item}</Link>
        })
      }
    </Breadcrumbs>
  ) : null
}

BreadCrumb.propTypes = {
  location: PropTypes.shape().isRequired,
}

export default withRouter(BreadCrumb)
