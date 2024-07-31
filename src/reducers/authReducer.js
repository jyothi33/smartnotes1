import { SIGN_IN, SIGN_IN_ERROR, SIGN_OUT } from "../redux/actionTypes/authActionTypes";

const initialState = {
    isAuthenticated: false,
    user: {},
    error: ""
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_IN : 
         return {
            ...state,
            isAuthenticated: true,
            user: action.payload
         }
         case SIGN_IN_ERROR : 
         return {
            ...state,
            error: action.payload
         }
         case SIGN_OUT : 
         return {
            ...state,
            isAuthenticated: false,
            user: {}
         }
        default:
            return state
    }
}

export default authReducer;