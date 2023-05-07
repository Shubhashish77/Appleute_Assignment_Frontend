let DEFAULT_USER_STATE = {
    data: {
        _id: null,
        name: null,
        email: null
    },
    auth: null
}

export default function userReducer(state = DEFAULT_USER_STATE, action){
    switch(action.type){
        case "ISLOGGEDIN":
            return {
                ...state,
                data: { ...state.data, ...action.payload.data },
                auth: action.payload.auth
            };
        case "REGISTER": 
            return { ...state, 
                data: { ...state.data, ...action.payload.data}, 
                auth: action.payload.auth
            };
        case "LOGIN": 
            return {
                ...state,
                data: { ...state.data, ...action.payload.data },
                auth: action.payload.auth
            };
        case "LOGOUT":
            return { ...state, ...DEFAULT_USER_STATE}; 
        default: 
            return state;
    }
}