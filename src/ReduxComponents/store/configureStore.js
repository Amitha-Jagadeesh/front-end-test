import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import medicalRecordsReducer from '../reducers/medicalRecordsReducer'
import userReducer from '../reducers/userReducer'

const middleware = [thunk]

const ConfigureStore = ()=>{
const store = createStore(combineReducers({
    medicalRecords:medicalRecordsReducer,
    user:userReducer
    }),compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
        ))
    return store
}

export default ConfigureStore