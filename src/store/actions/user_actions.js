import * as users from './index';
import axios from 'axios';


export const loginUser = (data) => {
    return async (dispatch) => {
       try{
           const response = await axios.post(`http://localhost:4000/api/v1/users/login`, data);
           dispatch(users.loginUser(response.data));
           if(response.data.status==='success')
           dispatch(users.successGlobal("Logged In Successfully"))
       } catch (error) {
           dispatch(users.errorGlobal("Failed to login try again!!"))
       } 
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/users/logout`);
            dispatch(users.logoutUser());
            if (response.data.status === 'success')
                dispatch(users.successGlobal("Logged out Successfully"))
        } catch (err) {
            console.log(err.message);
            dispatch(users.errorGlobal("Failed to logged out try again!!"))
        }
    }
}
