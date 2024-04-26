// Import the necessary dependencies
import { InitialAuthState } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
const storedTasks =
  typeof window !== "undefined" ? localStorage.getItem("auth") : null;
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

// Create the auth slice
export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => {
      // Clear the state and localStorage on logout
      localStorage.removeItem("auth");
      return initialState;
    },
    login: (
      state,
      action: PayloadAction<{ email: string; username: string }>
    ) => {
      // Update the state
      const newState = {
        value: {
          isAuth: true,
          userName: action.payload.username,
          uuid: "98+6+5659+9+8+9",
          isAdmin: false,
          email: action.payload.email,
        },
      };
      // Save the state to localStorage
      localStorage.setItem("auth", JSON.stringify(newState));
      return newState;
    },
  },
});

// Export the actions and reducer
export const { login, logout } = auth.actions;
export default auth.reducer;
