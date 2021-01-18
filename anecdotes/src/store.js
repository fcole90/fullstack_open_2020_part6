import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdotesReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'


const store = createStore(
  combineReducers({
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    filter: filterReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)



// store.subscribe(() => console.log(store.getState()))
store.subscribe(() => null)

export default store