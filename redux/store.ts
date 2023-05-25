import {configureStore} from "@reduxjs/toolkit";
import {recipesApi} from "@/pages/api/recipesApi";
import {postsApi} from "@/pages/api/postsApi";

export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesApi.middleware)
});

