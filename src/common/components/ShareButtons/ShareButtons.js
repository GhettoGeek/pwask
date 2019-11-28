import React from 'react'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  ViberShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  ViberIcon,
  EmailIcon,
} from 'react-share'

const useStyles = makeStyles({
  button: {
    cursor: 'pointer',
  },
})

function Share() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item>
            <FacebookShareButton
              className={classes.button}
              url={t('share.url')}
              quote={t('share.title')}
            >
              <FacebookIcon round />
            </FacebookShareButton>
          </Grid>
          <Grid item>
            <TwitterShareButton
              className={classes.button}
              url={t('share.url')}
              title={t('share.title')}
            >
              <TwitterIcon round />
            </TwitterShareButton>
          </Grid>
          <Grid item>
            <EmailShareButton
              className={classes.button}
              url={t('share.url')}
              subject={t('share.title')}
              body={t('share.description')}
            >
              <EmailIcon round />
            </EmailShareButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item>
            <TelegramShareButton
              className={classes.button}
              url={t('share.url')}
              title={t('share.title')}
            >
              <TelegramIcon round />
            </TelegramShareButton>
          </Grid>
          <Grid item>
            <WhatsappShareButton
              className={classes.button}
              url={t('share.url')}
              title={t('share.title')}
            >
              <WhatsappIcon round />
            </WhatsappShareButton>
          </Grid>
          <Grid item>
            <ViberShareButton
              className={classes.button}
              url={t('share.url')}
              title={t('share.title')}
            >
              <ViberIcon round />
            </ViberShareButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Share
