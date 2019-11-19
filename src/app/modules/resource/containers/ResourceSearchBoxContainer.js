import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import { urlUtil } from '../../../../common/utils'
import ResourceSearchBox from '../components/ResourceSearchBox'

const resourceTypes = [
  {
    label: 'Type1',
    value: 'Type1',
  },
  {
    label: 'Type2',
    value: 'Type2',
  },
  {
    label: 'Type3',
    value: 'Type3',
  },
]

function handleSubmit(event, position, history, t, enqueueSnackbar) {
  event.preventDefault()
  const resourceType = event.target[0].value
  const location = event.target[3].value
  const cityCountry = location.split(',')
  const isPosition = Object.keys(position).length > 0 ? `?position=${position.latitude},${position.longitude}` : ''

  if (location && resourceType) {
    const searchUrl = `/${urlUtil.clean(resourceType)}/${urlUtil.clean(cityCountry[1])}/${urlUtil.clean(cityCountry[0])}${isPosition}`

    history.push(searchUrl)
  } else {
    enqueueSnackbar(t('search.mustChooseLocation'), { variant: 'error' })
  }
}

function ResourceSearchBoxContainer({ history }) {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <ResourceSearchBox
      resourceTypes={resourceTypes}
      handleSubmit={(event, position) => handleSubmit(event, position, history, t, enqueueSnackbar)}
    />
  )
}

ResourceSearchBoxContainer.propTypes = {
  history: PropTypes.shape().isRequired,
}

export default withRouter(ResourceSearchBoxContainer)
