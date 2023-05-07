
/// AUTHENTICATION 
export const registerUser = (user) => ({
    type: "REGISTER",
    payload: user
})

export const loginUser = (users) => ({
    type: "LOGIN",
    payload: users
})

export const isLoggedIn = (user) => ({
    type: "ISLOGGEDIN",
    payload: user
})

export const logoutUser = () => ({
    type: "LOGOUT"
})



/// PRODUCTS
export const getProducts = (products) => ({
    type: "GET_PRODUCT",
    payload: products
})


/// NOTIFICATIONS
export const errorGlobal = (msg) => ({
    type: 'ERROR_GLOBAL',
    payload: msg
})

export const successGlobal = (msg) => ({
    type: 'SUCCESS_GLOBAL',
    payload: msg
})

export const clearNotification = () => {
   return (dispatch) => {
    dispatch({
        type: 'CLEAR_NOTIFICATION'
    })
   }
}