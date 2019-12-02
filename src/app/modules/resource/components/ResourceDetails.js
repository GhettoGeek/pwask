import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import appConfig from '../../../appConfig'
import { Card } from '../../../../common/components'

function ResourceDetails({ data }) {
  const {
    id, name, images, description, country, city, address,
  } = data

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Card
          id={Number(id)}
          title={name}
          images={images}
          description={description}
          country={country}
          city={city}
          getDirectionUrl={`${appConfig.google.getDirectionUrl}${address}`}
        />
      </Grid>
    </Grid>
  )
}

ResourceDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })),
    description: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
}

export default ResourceDetails
