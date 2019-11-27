import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card, CardActions, CardContent, CardMedia, IconButton,
} from '@material-ui/core'
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons'
import SwipeableViews from 'react-swipeable-views'
import Typography from '../Typography'
import Pagination from '../Pagination'
import Link from '../Link'

const useStyles = makeStyles({
  card: {
    position: 'relative',
  },
  media: {
    height: 140,
  },
})

function EnhancedCard({
  id, title, description, images,
}) {
  const { t } = useTranslation()
  const classes = useStyles()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const handleChangeIndex = (value) => setCurrentIndex(value)

  return (
    <Card className={classes.card}>
      <SwipeableViews
        enableMouseEvents
        onChangeIndex={handleChangeIndex}
      >
        {images.map((image, index) => (
          <CardMedia
            key={index}
            image={image.src}
            title={image.label}
            className={classes.media}
          />
        ))}
        <Pagination
          dots={images.length + 1}
          currentIndex={currentIndex}
          onChangeIndex={handleChangeIndex}
        />
      </SwipeableViews>
      <CardContent>
        <Link to={`/resource/${id}`}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </Link>
        <Typography variant="body1">
          {description.substring(0, 250)}
          ...
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label={t('common.addToFavorite')}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label={t('common.share')}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

EnhancedCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    src: PropTypes.string,
  })),
}

EnhancedCard.defaultProps = {
  description: 'lorem ipsum dolor sit amet',
  images: [
    {
      label: '',
      src: '/images/placeholder.jpg',
    },
  ],
}

export default EnhancedCard
