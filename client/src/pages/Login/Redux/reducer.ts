import {ActionType, createReducer} from 'typesafe-actions';
import * as actions from './actions';

type Action = ActionType<typeof actions>;

export interface IState {
}

const initialState: IState = {

};

export const reducer = createReducer<IState, Action>(initialState).handleAction(
    actions.loginAction.success,
    (state, action) => {


        return {
            ...state,
        };
    }
);
