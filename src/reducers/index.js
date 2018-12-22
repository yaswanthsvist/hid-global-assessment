import { combineReducers } from 'redux'
import { dataReducer } from './data-reducer'
import { routeReducer } from 'react-router-redux'

export const reduxReducers = combineReducers({
  route: routeReducer,
  data: dataReducer
})
