
export interface IRecipes {
    id:number;
    title:string;
    image:string;
    summary:string;

}

export interface IRecipesResponse {
    recipes: IRecipes[];
}

