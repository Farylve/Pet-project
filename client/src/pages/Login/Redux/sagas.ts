import { put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import * as api from "../../../modules/service/api"



import { loginAction } from './actions';
import { ILoginQuerySuccess } from './interfaces';

export function* loginSaga(action: ReturnType<typeof loginAction.request>) {
    try {
        const baseUrl = 'http://localhost:3001/'

        // const formData = new FormData()
        // formData.append('login', action.payload.login)

        const responce: ILoginQuerySuccess = yield fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        })
        const result: ILoginQuerySuccess = yield responce.json()
        console.log(result);
        
        localStorage.setItem('autorize', 'true')
        
        // const response: ILoginQuerySuccess = yield api.post({
        //     url: baseUrl,
        //     data: action.payload,
        //     isNotAuthorized: true,
        // })


    } catch (error: any) {

    }
}

export const sagas = [takeLatest(getType(loginAction.request), loginSaga)];
