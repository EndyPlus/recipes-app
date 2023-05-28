import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {IRecipes} from "@/models/IRecipes";
import React from "react";

interface RecipeCardProps {
    recipe: IRecipes;
}
 const Recipe: React.FC<RecipeCardProps> = ({recipe}) => {
    return (
        <div>
            {/*Header*/}
            <Header />
            {/*Main*/}
            <div className="flex flex-col min-h-screen">
                <h1>hi</h1>
            </div>
            {/*Footer*/}
            <Footer />
        </div>
    )
}

export default Recipe;