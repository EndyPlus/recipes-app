import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
}

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        headers: {
            'X-RapidAPI-Key': '799f086286msh2a85634f0d14ac5p19431djsn51a6d75fd0b1',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        },
    }),
    endpoints: (builder) => ({
        getRandomRecipe: builder.query<Recipe, void>({
            query: () => '/recipes/random',
        }),
    }),
})

export const { useGetRandomRecipeQuery } = recipeApi;