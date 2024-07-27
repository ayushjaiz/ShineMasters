import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
}

export interface UserState {
  user: User | null;
  language: string;
}

const initialState: UserState = {
  user: null,
  language: "en",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
