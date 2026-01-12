import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: string;
  email: string;
  role?: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  bootstrapped: boolean; // important for route decisions
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  bootstrapped: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.bootstrapped = true;
    },
    clearAuth(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.bootstrapped = true;
    },
  },
});

export const { setUser, clearAuth } = slice.actions;
export default slice.reducer;
