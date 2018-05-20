import { combineReducers } from 'redux'
import  {routerReducer} from 'react-router-redux'
import userList from './Users/reducer'

export default combineReducers({
    routing: routerReducer,
    userList,
})
