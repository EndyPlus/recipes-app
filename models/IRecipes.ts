
export interface IRecipes {
    id:number;
    title:string;
    image:string;
    summary:string;
}

export interface IRecipeInfo extends IRecipes{
    extendedIngredients:[];
    steps:[];
    ingredients:[];
    equipment:[];
}
