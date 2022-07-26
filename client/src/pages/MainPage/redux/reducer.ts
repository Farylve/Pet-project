import { ActionType, createReducer } from "typesafe-actions"

import * as actions from "./actions"

export interface IState {
  readyForBack: []
  filesURL:
    | [
        {
          url: string
          key: string
          claimId: string
        }
      ]
    | []
}

const initialState: IState = {
  readyForBack: [],
  filesURL: [],
}

type Action = ActionType<typeof actions>

export const reducer = createReducer<IState, Action>(initialState)
  .handleAction(actions.stateForAddFileActions.success, (state: any, action) => {
    return {
      ...state,
      readyForBack: action.payload,
    }
  })
  .handleAction(actions.addFileActions.success, (state: any, action) => {
    return {
      ...state,
      readyForBack: [],
      fileAddedSuccess: true,
    }
  })
  .handleAction(actions.addFileActions.failure, (state: any, action) => {
    return {
      ...state,
      fileAddedSuccess: false,
    }
  })

  .handleAction(actions.getFileActions.request, (state: any, action) => {
    return {
      ...state,
      isLoadingURL: true,
    }
  })
  .handleAction(actions.getFileActions.success, (state: any, action) => {
    const { url, key, claimId } = action.payload

    return {
      ...state,
      isLoadingURL: false,
      filesURL: [...state.filesURL, { url, key, claimId }],
    }
  })
