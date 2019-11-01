import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton,
} from '@material-ui/core'
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons'
import Typography from '../Typography'
import { styled } from '../../utils/style'

const StyledCard = styled(Card)({
  maxWidth: 345,
})

const StyledCardMedia = styled(CardMedia)({
  height: 140,
})

function EnhancedCard({ title, description, image }) {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          image={image}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {description.substring(0, 250)}
            ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label={t('common.addToFavorite')}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label={t('common.share')}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  )
}

EnhancedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
}

EnhancedCard.defaultProps = {
  description: 'lorem ipsum dolor sit amet',
  image: '/images/placeholder.jpg',
}

export default EnhancedCard
