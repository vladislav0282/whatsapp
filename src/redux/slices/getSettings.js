import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initState.settings,
  reducers: {
    getSettings(state, action) {
      return state = action.payload
    },
  },
})

export const { getSettings } = settingsSlice.actions
export const getSettingsSelector = (state) => state.settings.wid
export const settingsReducer = settingsSlice.reducer
