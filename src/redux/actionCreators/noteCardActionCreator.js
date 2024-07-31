/* eslint-disable default-case */
import * as types from "../actionTypes/noteCardActionTypes"
import { auth, db } from "../../config/firebase"
import { addDoc, collection } from "firebase/firestore"

const addNote = (payload) => {
    return {
        type: types.ADD_NOTE,
        payload
    }
}

export const addNoteFunction = (docs, updatedNote, query) => async (dispatch) => {
    if (!docs) {
        await addDoc(collection(db, `notes`), auth.currentUser.uid);
      }
      await addDoc(query, updatedNote);
        dispatch(addNote({
            title : updatedNote.title,
            description: updatedNote.description
        }));
}