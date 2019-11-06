import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import throttle from 'lodash/throttle'
import parse from 'autosuggest-highlight/parse'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Grid, Paper, InputAdornment } from '@material-ui/core'
import {
  Button, Icon, Select, Textfield, Typography,
} from '../../../../common/components'
import { loadScript } from '../../../../common/utils/script'
import config from '../../../appConfig'

const autocompleteService = { current: null }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  button: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))

function ResourceSearchBox({ resourceTypes }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [position, setPosition] = React.useState({})
  const [city, setCity] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState([])
  const loaded = React.useRef(false)
  const { enqueueSnackbar } = useSnackbar()

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        `${config.google.apiUrl}?libraries=places,geocode&key=${config.google.apiKey}`,
        document.querySelector('head'),
        'google-maps',
      )
    }

    loaded.current = true
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleLocationClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        const latLng = new window.google.maps.LatLng(latitude, longitude)

        setPosition({ latitude, longitude })

        new window.google.maps.Geocoder().geocode({ latLng }, (results, status) => {
          if (status === window.google.maps.GeocoderStatus.OK) {
            if (results[0] && results[0].address_components) {
              const currentCity = results[0].address_components[2].long_name
              const currentCountry = results[0].address_components[5].long_name

              setCity(currentCity)
              setCountry(currentCountry)
              setInputValue(`${currentCity}, ${currentCountry}`)
            }
          }
        })
      })
    } else {
      enqueueSnackbar(t('common.errors.geolocationNotAvailable'), { variant: 'error' })
    }
  }

  function handleSubmit() {
    return (
      <Redirect to={`/${country}/${city}?position=${position.latitude},${position.longitude}`} />
    )
  }

  const fetch = React.useMemo(() => throttle((input, callback) => {
    autocompleteService.current.getPlacePredictions(input, callback)
  }, 200), [])

  React.useEffect(() => {
    let active = true

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService()
    }
    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === '') {
      setOptions([])

      return undefined
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        setOptions(results || [])
      }
    })

    return () => {
      active = false
    }
  }, [inputValue, fetch])

  return (
    <Paper className={classes.root}>
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <Select
              fullWidth
              id="resource-type"
              items={resourceTypes}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              getOptionLabel={(option) => option.description}
              filterOptions={(x) => x}
              options={options}
              autoComplete
              includeInputInList
              freeSolo
              disableOpenOnFocus
              renderInput={() => (
                <Textfield
                  label={t('search.chooseLocation')}
                  variant="outlined"
                  fullWidth
                  value={inputValue}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon
                          type="material-ui"
                          name="gps_fixed"
                          onClick={handleLocationClick}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
              renderOption={(option) => {
                const matches = option.structured_formatting.main_text_matched_substrings
                const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match) => [match.offset, match.offset + match.length]),
                )

                return (
                  <Grid container alignItems="center">
                    <Grid item>
                      <LocationOnIcon className={classes.icon} />
                    </Grid>
                    <Grid item xs>
                      {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                          {part.text}
                        </span>
                      ))}

                      <Typography variant="body2" color="textSecondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => handleSubmit()}
            >
              {t('common.search')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

ResourceSearchBox.propTypes = {
  resourceTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ResourceSearchBox
