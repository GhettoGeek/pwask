import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import appConfig from '../../../appConfig'
import { Card } from '../../../../common/components'

function ResourceList({ items }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {items.map(({
        id,
        name,
        images,
        description,
        address,
      }) => (
        <Grid item key={id} xs={12} sm={4}>
          <Card
            id={id}
            title={name}
            images={images}
            description={description}
            getDirectionUrl={`${appConfig.google.getDirectionUrl}${address}`}
          />
        </Grid>
      ))}
    </Grid>
  )
}

ResourceList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })),
    description: PropTypes.string,
    address: PropTypes.string,
  })).isRequired,
}

export default ResourceList
