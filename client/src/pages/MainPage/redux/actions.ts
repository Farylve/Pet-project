import { createAsyncAction } from "typesafe-actions";
import { IGetAllPurchase } from "./interfaces";



export const getAllPurchaseAction = createAsyncAction(
  "STATE_FOR_ADD_FILE/QUERY",
  "STATE_FOR_ADD_FILE/SUCCESS",
  "STATE_FOR_ADD_FILE/FAILURE"
)<any, any, any>();

