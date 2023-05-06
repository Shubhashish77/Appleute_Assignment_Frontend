import { combineReducers } from "redux";

import products from './products_reducer';
import users from './users_reducer';
import notification from './notification_reducer'

const appReducers = combineReducers({
    products,
    users,
    notification
})

export default appReducers;