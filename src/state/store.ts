import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";
import { notesApi } from "./data-request";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        notesStore : notesSlice,
        [notesApi.reducerPath] : notesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(notesApi.middleware)
    }
});

setupListeners(store.dispatch)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;