// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import headerReducer from "./slices/headerSlice";

// export const store = configureStore({
//   reducer: {
//    headerReducer
//   },

// });

// setupListeners(store.dispatch);


import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { generalApiSlice } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import headerReducer from "./slices/headerSlice";

// Define the store
export const store = configureStore({
  reducer: {
    header: headerReducer,
    app: appReducer,
    [generalApiSlice.reducerPath]: generalApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApiSlice.middleware),
});

// Optional, enables refetchOnFocus/refetchOnReconnect behaviors
// See `setupListeners` docs - accepts an optional callback for customization
setupListeners(store.dispatch);
