import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { styled } from '../../../utils/style'

import PageTemplate from '../../templates/PageTemplate'
import Hero from '../../organisms/Hero'

const MainTitle = styled(Typography)({
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
})

const HomePage = ({ t }) => (
  <PageTemplate>
    <Grid container justify="center" alignItems="center" spacing={24}>
      <Grid item xs={12}>
        <MainTitle color="primary">{t('homePage.title')}</MainTitle>
      </Grid>
    </Grid>
    <Hero />
  </PageTemplate>
)

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(HomePage)
