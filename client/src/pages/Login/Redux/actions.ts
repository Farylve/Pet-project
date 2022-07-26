import { createAsyncAction } from "typesafe-actions";
import { ILoginQuery, ILoginQuerySuccess } from "./interfaces";




export const loginAction = createAsyncAction(
    "LOGIN/QUERY",
    "LOGIN/SUCCESS",
    "LOGIN/FAILURE"
  )<ILoginQuery, ILoginQuerySuccess, any>();