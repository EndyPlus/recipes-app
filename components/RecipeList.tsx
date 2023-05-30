import { RecipeCard } from '@/components/RecipeCard';
import React from 'react';
import { useGetRandomRecipesQuery } from '@/pages/api/recipesApi';
import { IRecipes } from '@/models/IRecipes';
import Link from "next/link";

export const RecipeList = () => {
    const { data, isLoading, isError } = useGetRandomRecipesQuery(36);
    // console.log('data:', data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching recipes.</div>;
    }

    const recipes = data?.recipes || [];

    // console.log('recipes:', recipes);

    return (
        <div className="grid grid-cols-3 m-4 justify-evenly gap-5">
            {recipes.map((recipe: IRecipes) => (
                <Link key={recipe.id}  href={`/recipe/${recipe.id}`}>
                    <RecipeCard recipe={recipe} />
                </Link>
            ))}
        </div>
    );
};


// href={`/recipe/${recipe.id}/information`}
// href={`/${recipe.id}/information`}