import {IRecipes} from "@/models/IRecipes";

export interface IRecipesResponse {
    recipes: IRecipes[];
}

export interface IRecipeInfoResponse {
    recipes: IRecipesResponse[];
}