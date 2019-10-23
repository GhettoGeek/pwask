import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { Grid, Typography } from '@material-ui/core'
import { styled } from '../../common/utils/style'
import MainTemplate from '../../common/templates/MainTemplate'
import Hero from '../../common/components/organisms/Hero/Hero'

const MainTitle = styled(Typography)({
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
})

const HomePage = ({ t }) => (
  <MainTemplate>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <MainTitle color="primary">{t('homePage.title')}</MainTitle>
      </Grid>
    </Grid>
    <Hero />
  </MainTemplate>
)

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(HomePage)
