import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
        state.user = action.payload;
      },
    removeUser: (state) => {
      state.user=null;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, incrementByAmount } = userSlice.actions

export default userSlice.reducer