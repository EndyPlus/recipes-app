import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': '799f086286msh2a85634f0d14ac5p19431djsn51a6d75fd0b1',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        },
    }),
    endpoints: (build) => ({
        getRandomRecipes: build.query({
            query: () => `recipes/random`,
        })
    })
})

export const { useGetRandomRecipesQuery } = recipesApi;