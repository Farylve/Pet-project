import { createAsyncAction } from "typesafe-actions";
import { IGetAllPurchase } from "./interfaces";



export const getAllPurchase = createAsyncAction(
  "GET_ALL_PURCHASE/QUERY",
  "GET_ALL_PURCHASE/SUCCESS",
  "GET_ALL_PURCHASE/FAILURE"
)<IGetAllPurchase, any, any>();
