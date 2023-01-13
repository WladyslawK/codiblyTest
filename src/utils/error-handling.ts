import {Dispatch} from "@reduxjs/toolkit";
import {setAppErrorAC, setInitializedAC} from "../app/appSlice";

export const errorHandle = (dispatch: Dispatch, error: string) => {
  dispatch(setAppErrorAC({error}))
  dispatch(setInitializedAC({isInitialized: 'failed'}))
}