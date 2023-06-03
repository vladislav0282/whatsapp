/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const idMessageSlice = createSlice({
  name: 'idMessage',
  initialState: initState.idMessage,
  reducers: {
    getIdMessage(state, action) {
      return state = action.payload
    },
  },
})

export const { getIdMessage } = idMessageSlice.actions
export const getDataSelector = (state) => state.idMessage
export const idMessageReducer = idMessageSlice.reducer
