import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { styled } from '../../../utils/style'

const Wrapper = styled('footer')(theme => ({
  marginTop: theme.spacing.s,
  padding: theme.spacing.s,
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
