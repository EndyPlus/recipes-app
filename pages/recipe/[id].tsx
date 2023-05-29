import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import CurrentRecipe from "@/components/CurrentRecipe";


export default function Recipe() {

     return (
        <div>
            {/*Header*/}
            <Header />
            {/*Main*/}
            <CurrentRecipe />
            {/*Footer*/}
            <Footer />
        </div>
    )
}

