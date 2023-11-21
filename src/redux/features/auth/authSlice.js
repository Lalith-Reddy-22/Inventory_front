import { createSlice } from "@reduxjs/toolkit";

let name;
const storedName = localStorage.getItem("name");

if (storedName) {
  try {
    name = JSON.parse(storedName);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Handle the error or set a default value based on your logic
    name = null; // Setting a default value
  }
} else {
  name = null; // No value retrieved from localStorage
}

const initialState = {
  isLoggedIn: false,
  name: name || "",
  user: {
    name: "",
    email: "",
    phone: "",
    bio: "",
    photo: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
      state.user.bio = profile.bio;
      state.user.photo = profile.photo;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
