import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Card } from '../../../../common/components'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(14),
  },
}))

function ResourceDetails({ data }) {
  const classes = useStyles()
  const {
    id, name, images, description, country, city, address,
  } = data

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Card
          id={Number(id)}
          title={name}
          images={images || [
            {
              url: '/images/placeholder.jpg',
              label: 'default',
            },
          ]}
          description={description}
          country={country}
          city={city}
          address={address}
        />
      </Grid>
    </Grid>
  )
}

ResourceDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.string,
    description: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
}

export default ResourceDetails
