import { toast } from 'react-toastify';
import cookie from 'react-cookies';

export const showToast = (type, msg) => {
    switch(type){
        case 'SUCCESS': 
            toast.success(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            });
            break;
        case 'ERROR':
            toast.error(msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            break;
        default: 
            return false;        
    }
}

export const getTokenCookie = () => cookie.load('jwt_');
export const removeTokenCookie = () => cookie.remove('jwt_');
export const getAuthHeaders = { headers: { 'jwt_': getTokenCookie() }};