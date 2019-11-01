import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { Card } from '../../../../common/components'

function ResourceList({ items }) {
  return (
    <>
      {items.map(({
        id,
        name,
        mainImage,
        description,
      }) => (
        <Grid item key={id}>
          <Card
            title={name}
            image={mainImage || '/images/placeholder.jpg'}
            description={description}
          />
        </Grid>
      ))}
    </>
  )
}

ResourceList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    mainImage: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
}

export default ResourceList
