import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useModal } from 'react-modal-hook'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card, CardActions, CardContent, CardMedia, IconButton, Collapse,
} from '@material-ui/core'
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Directions as DirectionIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'
import SwipeableViews from 'react-swipeable-views'
import clsx from 'clsx'
import Typography from '../Typography'
import Pagination from '../Pagination'
import Link from '../Link'
import Dialog from '../Dialog'
import ShareButtons from '../ShareButtons'

const useStyles = makeStyles((theme) => ({
  images: {
    position: 'relative',
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

function EnhancedCard({
  id, title, shortDescription, longDescription, images, addToFavorites, isFavorite, getDirectionUrl,
}) {
  const { t } = useTranslation()
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const handleChangeIndex = (value) => setCurrentIndex(value)
  const [showShareDialog, closeShareDialog] = useModal(({ in: open = true }) => (
    <Dialog onClose={closeShareDialog} open={open}>
      <ShareButtons />
    </Dialog>
  ))

  return (
    <Card className={classes.card}>
      <div className={classes.images}>
        <SwipeableViews
          enableMouseEvents
          index={currentIndex}
          onChangeIndex={handleChangeIndex}
        >
          {images.map((image, index) => (
            <CardMedia
              key={index}
              image={image.url}
              title={image.title}
              className={classes.media}
            />
          ))}
        </SwipeableViews>
        <Pagination
          dots={images.length}
          currentIndex={currentIndex}
          onChangeIndex={handleChangeIndex}
        />
      </div>
      <CardContent>
        <Link to={`/resource/${id}`}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </Link>
        <Typography>
          {shortDescription.substring(0, 250)}
          ...
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label={t('common.getDirection')}
          title={t('common.getDirection')}
          onClick={() => { window.location.href = getDirectionUrl }}
        >
          <DirectionIcon />
        </IconButton>
        <IconButton
          aria-label={t('common.addToFavorite')}
          title={t('common.addToFavorite')}
          onClick={() => addToFavorites(id)}
        >
          <FavoriteIcon
            color={isFavorite ? 'primary' : 'inherit'}
          />
        </IconButton>
        <IconButton
          aria-label={t('common.share')}
          title={t('common.share')}
          onClick={showShareDialog}
        >
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: longDescription }} />
        </CardContent>
      </Collapse>
    </Card>
  )
}

EnhancedCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })),
  addToFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  getDirectionUrl: PropTypes.string.isRequired,
}

EnhancedCard.defaultProps = {
  shortDescription: '',
  longDescription: '',
  images: [
    {
      title: 'default',
      url: '/images/placeholder.jpg',
    },
  ],
  isFavorite: false,
}

export default EnhancedCard
