import React from 'react'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import { styled } from '../../utils/style'
import Typography from '../Typography'

const Wrapper = styled('footer')((theme) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
}))

function Footer() {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Grid container justify="space-evenly">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {t('footer.title')}
        </Typography>
      </Grid>
    </Wrapper>
  )
}

export default Footer
