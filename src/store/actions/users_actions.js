import * as users from './index';
import axios from 'axios';
import cookie from 'js-cookie';
import { getAuthHeaders } from '../../utils/tools'

export const registerUser = (data) => {
    return async (dispatch) => {
        try {
            console.log(data);
            const response = await axios.post(`http://localhost:4000/api/v1/users/signup`, data);
            dispatch(users.registerUser({ data: response.data.data.user, auth: true }));
            if (response.data.status === 'success'){
                dispatch(users.successGlobal("Successfully Registered"))
                cookie.set('jwt_', response.data.token);
            }
        } catch (error) {
            dispatch(users.errorGlobal(error.response.data.mess))
        }
    }
}

export const loginUser = (data) => {
    return async (dispatch) => {
       try{
            const response = await axios.post(`http://localhost:4000/api/v1/users/login`, data);
            dispatch(users.loginUser({data: response.data.data.user, auth: true}));
            if(response.data.status==='success'){
                dispatch(users.successGlobal("Logged In Successfully"))
                cookie.set('jwt_', response.data.token);
            }
       } catch (error) {console.log("error1",error)
            dispatch(users.errorGlobal(error.response.data.mess))
       } 
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/users/logout`);
            dispatch(users.logoutUser());
            if (response.data.status === 'success'){
                dispatch(users.successGlobal("Logged out Successfully"))
                cookie.remove('jwt_');
            }
        } catch (error) {
            dispatch(users.errorGlobal(error.message))
        }
    }
}

export const isLoggedIn = () => {
    return async (dispatch) => {
        try {
            console.log(getAuthHeaders);
            const response = await axios.get(`http://localhost:4000/api/v1/users/isLoggedIn`, getAuthHeaders);
            console.log(response.data);
            dispatch(users.isLoggedIn({ data: response.data.user, auth: true }))
            
        } catch (err) {
            dispatch(users.isLoggedIn({ data: {}, auth: false }))
        }
    }
}
