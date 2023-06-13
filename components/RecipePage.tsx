import React from "react";
import Image from "next/image"
import {IRecipeInfo} from "@/models/IRecipes";
import TestImg from "@/assets/recipeimg.jpg"
import {CurrentRecipe} from "@/components/CurrentRecipe";


const RecipePage = () => {
    return (
        <CurrentRecipe />
    )
}

export default RecipePage;