import { GET_NOTES } from "../redux/actionTypes/noteActionTypes";

const initialState = {
    query: null
};

const noteReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_NOTES : 
         return {
            ...state,
            query: action.payload.query
         }
        default:
            return state
    }
}

export default noteReducer;