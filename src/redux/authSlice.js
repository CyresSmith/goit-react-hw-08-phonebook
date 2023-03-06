import { createSlice } from '@reduxjs/toolkit';

export const authInitialState = {
  token: '',
  user: {
    name: '',
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuth(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authSlice.actions;
export const auth = authSlice.reducer;
