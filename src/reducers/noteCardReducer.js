import { ADD_NOTE, DELETE_NOTE } from "../redux/actionTypes/noteCardActionTypes";
import { v4 as uuid } from 'uuid';

const initialState = {
    id: uuid(),
    date: new Date().toString(),
    category: "",
    title: "",
    description:"",
    color: "black",
    bgColor: "white",
    folderName: "Notes"
};

const noteCardReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NOTE : 
         return {
            ...state,
            title: action.payload.title,
            description: action.payload.description
         }
         case DELETE_NOTE : 
         return {
            ...state
         }
        default:
            return state
    }
}

export default noteCardReducer;