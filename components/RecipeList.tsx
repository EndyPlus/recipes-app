import { RecipeCard } from "@/components/RecipeCard";
import React from "react";
import { useGetRandomRecipesQuery } from "@/pages/api/recipesApi";
import {useGetPostsQuery} from "@/pages/api/postsApi";


export const RecipeList = () => {
    // const { data: recipes, isError, isLoading } = useGetRandomRecipesQuery(12);
    const {data: posts , isLoading, isError} = useGetPostsQuery(12);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching recipes</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-3 m-4 justify-evenly gap-5">
                {/* cards */}
                {posts && posts.map((post) => (
                    <RecipeCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};
