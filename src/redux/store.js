import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from "../redux/features/darkModeSlice"
export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
})