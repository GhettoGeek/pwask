import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Breadcrumbs } from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'
import { styled } from '../../../utils/style'
import Link from '../../atoms/Link'
import Typography from '../../atoms/Typography'

const StyledHomeIcon = styled(HomeIcon)((theme) => ({
  marginRight: theme.spacing(1),
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
