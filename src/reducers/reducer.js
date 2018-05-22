import { combineReducers } from 'redux'
import  {routerReducer} from 'react-router-redux'
import userList from './Users/reducer'
// import userGet from './getUser/reducer'

export default combineReducers({
    routing: routerReducer,
    userList,
})
