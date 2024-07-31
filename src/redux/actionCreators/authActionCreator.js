/* eslint-disable default-case */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import * as types from "../actionTypes/authActionTypes"
import { auth, googleAuthProvider } from "../../config/firebase"

const loginUser = (payload) => {
    return {
        type: types.SIGN_IN,
        payload
    }
}

const logOutUser = () => {
    return {
        type: types.SIGN_OUT
    }
}

const dispatchError = (payload) => {
    return {
        type: types.SIGN_IN_ERROR,
        payload
    }
}

export const signInUser = (email, password) => async (dispatch) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        dispatch(loginUser({
            uid: auth?.currentUser?.uid,
            email: auth?.currentUser?.email
        }));
      } catch (err) {
        switch (err.code) {
          case "auth/invalid-credential":
            dispatch(dispatchError({
                error: "Invalid Username/Password!"
            }));
            break;
        }
      }
}

export const signUpUser = (email, password) => async (dispatch) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(loginUser({
            uid: auth?.currentUser?.uid,
            email: auth?.currentUser?.email
        }));
      } catch (err) {
        switch (err.code) {
          case "auth/email-already-in-use":
            dispatch(dispatchError({
                error: "Email already in use!"
            }));
            break;
        }
      }
}

export const signInUsingGoogle = () => async (dispatch) => {
    try {
        await signInWithPopup(auth, googleAuthProvider);
        dispatch(loginUser({
            uid: auth?.currentUser?.uid,
            email: auth?.currentUser?.email
        }));
      } catch (err) {
        console.log("Unable to signin with Google Account!");
      }
}

export const signOutUser = () => async (dispatch) => {
    try {
        await signOut(auth);
      } catch (err) {
        console.log(err);
      }
    dispatch(logOutUser())
}