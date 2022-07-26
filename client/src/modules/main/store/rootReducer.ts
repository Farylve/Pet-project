import { combineReducers } from "redux"
import { reducer as loginReducer } from "../../../pages/Login/Redux/reducer"



export const rootReducer = combineReducers({
  loginReducer,

})
