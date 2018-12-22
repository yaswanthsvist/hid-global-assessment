import {
  GET_DATA_SUCCEEDED,
  GET_DATA_ERROR,
  UPDATE_PLAYERS_LIST
} from '../actions/index'

const initialState = {
  data: null
}

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_SUCCEEDED:
      return {
        ...state,
        error: null,
        data: action.data
      }
    case GET_DATA_ERROR:
      return {
        ...state,
        error: action.error
      }
    case UPDATE_PLAYERS_LIST:
      return {
        ...state,
        data: {
          ...state.data,
          columns: {
            ...state.data.columns,
            'available-players': {
              ...state.data.columns['available-players'],
              playerIds: [...action.updateAvailablePlayers]
            },
            'selected-players': {
              ...state.data.columns['selected-players'],
              playerIds: [...action.updatedSelectedPlayers]
            }
          }
        }
      }
    default:
      return state
  }
}
