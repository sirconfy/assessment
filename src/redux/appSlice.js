// src/redux/appSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Utility functions for localStorage management
const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Initial state with localStorage recovery
const initialState = {
  app_loading: false,
  userInfo: loadFromLocalStorage("userInfo"),
  appMode: loadFromLocalStorage("appMode"),
  basicProfileInfo: null,
  timeStorage: loadFromLocalStorage("timeStorage"),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.app_loading = action.payload;
    },
    // setUserInfo: (state, action) => {
    //   state.userInfo = {
    //     ...state.userInfo,
    //     ...action.payload,
    //   };
    //   saveToLocalStorage("userInfo", state.userInfo);
    // },
    logOut: (state) => {
      const userrec = state.userInfo;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("appMode");

      if (userrec?.role === "ADMIN") {
        window.location.href = "/login";
      } else {
        window.location.href = "/";
      }
    },
    storeAppMode: (state, action) => {
      state.appMode = action.payload;
      saveToLocalStorage("appMode", action.payload);
    },
  },
});

export const selectUserInfo = (state) => state?.app?.userInfo;
export const selectTimeStorage = (state) => state?.app?.timeStorage;
export default appSlice.reducer;

export const {
  setAppLoading,
  setUserInfo,
  logOut,
  storeAppMode,
} = appSlice.actions;

export const appMode = (state) => state.appMode;
