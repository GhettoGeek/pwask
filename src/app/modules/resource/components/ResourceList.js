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

function ResourceList({ items }) {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
      className={classes.root}
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
            images={images || [
              {
                url: '/images/placeholder.jpg',
                label: 'default',
              },
            ]}
            description={description}
            address={address}
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
    mainImage: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
  })).isRequired,
}

export default ResourceList
