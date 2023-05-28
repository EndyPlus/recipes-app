import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPosts} from "@/models/IRecipesResponse";


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<IPosts[], number>({
            query: (limit: number = 12) => ({
                url: `posts`,
                params: {
                    _limit: limit
                },
            })
        })
    })
})

export const {useGetPostsQuery} = postsApi;