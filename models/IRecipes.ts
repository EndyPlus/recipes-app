
export interface IRecipes {
    id:number;
    title:string;
    image:string;
    summary:string;
}

export interface IRecipeInfo {
    id:string;
    title: string;
    image:string;
    extendedIngredients:[];
    steps:[];
    ingredients:[];
    equipment:[];
}
