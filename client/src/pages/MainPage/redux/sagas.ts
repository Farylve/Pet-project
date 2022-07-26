import { IGetAllPurchase } from './interfaces';
import { notification } from "antd"
import { put, takeLatest } from "redux-saga/effects"
import { getType } from "typesafe-actions"

import { getAllPurchaseAction } from "./actions"


export function* getAllPurchase(action: ReturnType<typeof getAllPurchaseAction.request>) {
  try {
    


    yield put(getAllPurchaseAction.success(action.payload))
  } catch (error) {
    console.log(error)
  }
}


export const sagas = [
  takeLatest(getType(getAllPurchaseAction.request), getAllPurchase),

]
