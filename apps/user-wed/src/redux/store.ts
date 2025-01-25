'use client';
import { configureStore } from '@reduxjs/toolkit'
import newPostSlice from './post/NewPostSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      newPost: newPostSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']