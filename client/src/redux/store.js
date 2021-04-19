import { combineReducers, createStore } from 'redux'
import { coachReducer } from './reducers'


const rootReducer = combineReducers({
    coach: coachReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;