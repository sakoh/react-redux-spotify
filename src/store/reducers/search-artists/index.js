import { combineReducers } from 'redux'
import { data } from './data'
import { error } from './error'
import { inFlight } from './in-flight'

export default combineReducers({
  data,
  error,
  inFlight,
})
