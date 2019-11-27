import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { getResourceById } from '../resourceService'
import ResourceDetails from '../components/ResourceDetails'
import { Loader, Typography } from '../../../../common/components'

function ResourceDetailsContainer({ id }) {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Query query={getResourceById(id)}>
      {({ loading, error, data }) => {
        if (loading) { return <Loader /> }
        if (error) { enqueueSnackbar(t('common.errors.global'), { variant: 'error' }) }

        return data.resource.length > 0 ? (
          <ResourceDetails data={data.resource[0]} />
        ) : <Typography variant="body1">{t('common.noResults')}</Typography>
      }}
    </Query>
  )
}

ResourceDetailsContainer.propTypes = {
  id: PropTypes.number.isRequired,
}

export default ResourceDetailsContainer
