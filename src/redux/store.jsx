import { configureStore } from '@reduxjs/toolkit'
import { REDUX_LS_KEY } from './constants'
import { gitInitState } from './initState'
import { idMessageReducer } from './slices/idMessageSlice'
import { settingsReducer } from './slices/getSettings'

export const store = configureStore({
  reducer: {
    idMessage: idMessageReducer,
    settings: settingsReducer,
  },
  preloadedState: gitInitState(),
})

store.subscribe(() => window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState())))
