import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRecipesResponse} from "@/models/IRecipesResponse";

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': '799f086286msh2a85634f0d14ac5p19431djsn51a6d75fd0b1',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        },
    }),
    endpoints: (builder) => ({
        getRandomRecipes: builder.query<IRecipesResponse, number>({
            query: (number) => ({
                url: `recipes/random`,
                params: {number: number},
            })
        }),
        getRecipeInformation: builder.query<any, any>({
            query: () => ({
                url: `recipes/1/information`
            })
        })
    })
})

export const { useGetRandomRecipesQuery } = recipesApi;