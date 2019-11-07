import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { getResourcesByType } from '../resourceService'
import ResourceList from '../components/ResourceList'
import { Loader } from '../../../../common/components'

function ResourceListContainer({ type, country, city }) {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Query query={getResourcesByType(type, country, city)}>
      {({ loading, error, data }) => {
        if (loading) { return <Loader /> }
        if (error) { enqueueSnackbar(t('common.errors.global'), { variant: 'error' }) }

        return (
          <ResourceList items={data.resource} />
        )
      }}
    </Query>
  )
}

ResourceListContainer.propTypes = {
  type: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
}

ResourceListContainer.defaultProps = {
  type: 'Type1',
  country: 'France',
  city: 'Paris',
}

export default ResourceListContainer
