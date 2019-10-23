import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { Grid, Typography } from '@material-ui/core'
import { styled } from '../../../utils/style'

const Wrapper = styled('footer')((theme) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
}))

const Footer = ({ t }) => (
  <Wrapper>
    <Grid container justify="space-evenly">
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        {t('footer.title')}
      </Typography>
    </Grid>
  </Wrapper>
)

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(Footer)
