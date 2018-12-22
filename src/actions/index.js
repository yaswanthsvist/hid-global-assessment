// @flow
export type GetDataAction = {
  type: typeof GET_DATA
}
export const GET_DATA = 'GET_DATA'
export const getData = () => ({
  type: GET_DATA
})
export type Data = {
  data1d: Array<Array<number>>
}
export type GetDataSuccessAction = {
  type: typeof GET_DATA_SUCCEEDED,
  data: Data
}
export const GET_DATA_SUCCEEDED = 'GET_DATA_SUCCEEDED'
export const getDataSuccess = (data: Data) => ({
  type: GET_DATA_SUCCEEDED,
  data
})

export type GetDataErrorAction = {
  type: typeof GET_DATA_ERROR,
  error: Error
}
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const getDataError = (error: Error) => ({
  type: GET_DATA_ERROR,
  error
})

export const UPDATE_PLAYERS_LIST = 'DRAG_ITEM'

export const updatePlayersList = (
  updateAvailablePlayers: Array<string>,
  updatedSelectedPlayers: Array<string>
) => ({
  type: UPDATE_PLAYERS_LIST,
  updateAvailablePlayers,
  updatedSelectedPlayers
})

export type Action = GetDataAction | GetDataSuccessAction | GetDataErrorAction
