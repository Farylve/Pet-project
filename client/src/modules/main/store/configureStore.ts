import 'regenerator-runtime/runtime'
import { legacy_createStore, applyMiddleware } from 'redux' // ??
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore() {
    const resultStore = legacy_createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

    sagaMiddleware.run(rootSaga)

    return resultStore
}

export const store = configureStore()