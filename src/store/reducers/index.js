import { combineReducers } from "redux";

import products from './products_reducer';
import user from './users_reducer';
import notification from './notification_reducer'

const appReducers = combineReducers({
    products,
    user,
    notification
})

export default appReducers;