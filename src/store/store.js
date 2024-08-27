import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "../store/homeSlice.js";

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});
