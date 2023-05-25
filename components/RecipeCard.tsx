import Image from "next/image";
import {IRecipes} from "@/models/IRecipes";
import React, {FC} from "react";
import TestImage from "@/assets/recipeimg.jpg"


interface RecipeCardProps {
    recipe: IRecipes;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({recipe}) => {


    return (
        <div className="group">
            <div className="border-2 bg-white rounded-lg overflow-hidden group-hover:border-indigo-700 cursor-pointer">
                <Image src={recipe.image} alt={recipe.title} width={1500} height={1125} className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h2 className="font-bold text-xl text-indigo-500 mb-2 group-hover:underline">{recipe.title}</h2>
                    <p className="text-indigo-400">{recipe.summary}</p>
                </div>
            </div>
        </div>
    )
}
