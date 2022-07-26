import { IGetAllPurchase } from './interfaces';
import { notification } from "antd"
import { put, takeLatest } from "redux-saga/effects"
import { getType } from "typesafe-actions"

import { getAllPurchase  } from "./actions"


export function* getAllPurchase(action: ReturnType<typeof getAllPurchase.request>) {
  try {
    yield put(.success(action.payload))
  } catch (error) {
    console.log(error)
  }
}


export const sagas = [
  takeLatest(getType(getAllPurchase.request), getAllPurchase),

]
