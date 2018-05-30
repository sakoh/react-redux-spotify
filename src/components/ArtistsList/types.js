import PropTypes from 'prop-types'

export const artistPropType = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
}
