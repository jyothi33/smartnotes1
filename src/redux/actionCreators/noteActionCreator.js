/* eslint-disable default-case */
import * as types from "../actionTypes/noteActionTypes"
import { auth, db } from "../../config/firebase"
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"

const getNotes = (payload) => {
    return {
        type: types.GET_NOTES,
        payload
    }
}

export const getNotesFunction  = () => async (dispatch) => {
    const query = collection(db, `notes/${auth?.currentUser?.uid}/myNotes`);
        dispatch(getNotes({
            query: query
        }));
}

export const deleteNote  = (deleteNoteId) => async (dispatch) => {
    const docRef = doc(db, `notes/${auth?.currentUser?.uid}/myNotes`, deleteNoteId);
    await deleteDoc(docRef);
}

export const colorNote  = (colorNoteId, bgColor) => async (dispatch) => {
    const docRef = doc(db, `notes/${auth?.currentUser?.uid}/myNotes`, colorNoteId);

    updateDoc(docRef,{
        bgColor : bgColor,
        color: "white"
    })
}