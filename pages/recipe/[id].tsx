import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import RecipePage from "@/components/RecipePage";
import {useGetRecipeInformationQuery} from "@/pages/api/recipesApi";


export default function Recipe() {

    // const {data, isLoading, isError} = useGetRecipeInformationQuery();
    //
    // const { title, image, summary } = data;

    // const recipe = data?.recipe || [];

    return (
        <div>
            {/*Header*/}
            <Header />
            {/*Main*/}
            <RecipePage/>
            {/*Footer*/}
            <Footer />
        </div>
    )
}

