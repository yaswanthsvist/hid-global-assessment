import { put, takeLatest, call } from 'redux-saga/effects'
import { GET_DATA } from './../actions/index'
import { getUserDataApi } from './../utilities/Api'
import { history } from './../App'
import { getDataSuccess, getDataError } from './../actions/index'

function* getUserData(action) {
  try {
    const { userDetails } = action
    const response = yield call(getUserDataApi)

    if (response.status !== 200) {
      // make the promise be rejected if we didn't get a 200 response
      throw new Error(JSON.stringify(data))
    } else {
      const data = yield response.json()
      yield put(getDataSuccess(data.data))
    }
  } catch (err) {
    yield put(getDataError(err))
  }
}

export function* watchGetData() {
  yield takeLatest(GET_DATA, getUserData)
}
