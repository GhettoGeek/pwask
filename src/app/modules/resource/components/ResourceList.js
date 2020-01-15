import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import appConfig from '../../../appConfig'
import { Card, Loader, Typography } from '../../../../common/components'

function ResourceList({
  items, loading, isFavorite, addToFavorites,
}) {
  const { t } = useTranslation()

  if (loading) { return <Loader /> }

  return items.length > 0 ? (
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
            isFavorite={isFavorite(id)}
            addToFavorites={addToFavorites}
            getDirectionUrl={`${appConfig.google.getDirectionUrl}${address}`}
          />
        </Grid>
      ))}
    </Grid>
  ) : <Typography variant="body1">{t('common.noResults')}</Typography>
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
  })),
  loading: PropTypes.bool,
  isFavorite: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
}

ResourceList.defaultProps = {
  items: [],
  loading: true,
}

export default ResourceList
