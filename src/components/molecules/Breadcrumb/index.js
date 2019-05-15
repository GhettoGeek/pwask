import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/lab/Breadcrumbs'
import HomeIcon from '@material-ui/icons/Home'
import { styled } from '../../../utils/style'

const StyledHomeIcon = styled(HomeIcon)(theme => ({
  marginRight: theme.spacing.unit / 2,
  width: 20,
  height: 20,
}))

const BreadCrumb = ({ location }) => {
  const crumbs = location.pathname.split('/').filter(Boolean)
  const crumbsLength = crumbs.length

  return (
    <Breadcrumbs aria-label="Breadcrumb">
      <Link color="inherit" href="/">
        <StyledHomeIcon />
      </Link>
      {
        crumbs.map((item, index) => {
          if (crumbsLength === index + 1) {
            return <Typography color="primary" key={index}>{item}</Typography>
          }

          return (
            <Link color="prmary" href={`/${item}`} key={index}>
              {item}
            </Link>
          )
        })
      }
    </Breadcrumbs>
  )
}

BreadCrumb.propTypes = {
  location: PropTypes.shape().isRequired,
}

export default withRouter(BreadCrumb)
