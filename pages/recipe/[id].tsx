import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import CurrentRecipe from "@/components/CurrentRecipe";
import {useGetRecipeInformationQuery} from "@/pages/api/recipesApi";


export default function Recipe() {

    const {data, isLoading, isError} = useGetRecipeInformationQuery();

    const { title, image, summary } = data;

    return (
        <div>
            {/*Header*/}
            <Header />
            {/*Main*/}
            <CurrentRecipe/>
            {/*Footer*/}
            <Footer />
        </div>
    )
}

