import { all } from "redux-saga/effects"
import { sagas as loginSaga } from "../../../pages/Login/Redux/sagas"
// import { sagas as some } from ""

export function* rootSaga() {
  yield all([
    ...loginSaga,

  ])
}
