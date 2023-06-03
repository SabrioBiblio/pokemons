import { createSlice } from '@reduxjs/toolkit'

interface USerSettingsState {
  gridView: boolean;
}

const initialState: USerSettingsState = {
  gridView: true,
}

export const userSettingsSlice = createSlice({
  name: 'usersSettings',
  initialState,
  reducers: {
    setView: (state) => {
      state.gridView = !state.gridView
    }
  },
})

export const { setView } = userSettingsSlice.actions

export default userSettingsSlice.reducer