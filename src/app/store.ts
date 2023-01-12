import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { appSlice } from './appSlice'

const rootReducer = combineReducers({
    appProducts: appSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
