export default function userReducer(state={}, action){
    switch(action.type){
        case "LOGIN": 
            return {...state, users: action.payload};
        case "LOGOUT":
            return {}; 
        default: 
            return state;
    }
}