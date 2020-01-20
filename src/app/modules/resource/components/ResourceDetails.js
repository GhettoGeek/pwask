import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import appConfig from '../../../appConfig'
import { Card, Loader, Typography } from '../../../../common/components'

function ResourceDetails({ data, loading }) {
  const { t } = useTranslation()

  if (loading) { return <Loader /> }

  if (data && data.resource) {
    const {
      id, name, images, description, country, city, address,
    } = data.resource[0]

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

  return <Typography>{t('common.noResults')}</Typography>
}

ResourceDetails.propTypes = {
  data: PropTypes.shape({
    resource: PropTypes.arrayOf(PropTypes.shape()),
  }),
  loading: PropTypes.bool,
}

ResourceDetails.defaultProps = {
  data: null,
  loading: true,
}

export default ResourceDetails
