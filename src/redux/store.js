
import { composeWithDevTools } from '@redux-devtools/extension';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import noteReducer from '../reducers/noteReducer';
import noteCardReducer from '../reducers/noteCardReducer';

const store = createStore(
    combineReducers({
        auth : authReducer,
        notes: noteReducer,
        newNote: noteCardReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;