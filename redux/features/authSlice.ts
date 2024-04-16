import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialAuthState } from "@/interfaces";

const storedTasks = localStorage.getItem("tasks");
const initialState: InitialAuthState = storedTasks
  ? JSON.parse(storedTasks)
  : {
      value: {
        isAuth: false,
        userName: "",
        uuid: "",
        isAdmin: false,
      },
    };
export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uuid: "98+6+5659+9+8+9",
          isAdmin: false,
        },
      };
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
