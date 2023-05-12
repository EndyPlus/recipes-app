import RecipeCard from "@/components/RecipeCard";
import React from "react";


export default function RecipeList() {
    return (
        <div>
            <div className="grid grid-cols-3 m-4 justify-evenly gap-5">
                {/*cards*/}
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </div>

    )
}