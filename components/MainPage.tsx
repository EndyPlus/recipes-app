import {RecipeList} from "@/components/RecipeList";


export default function MainPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/*Search block*/}
            <div
                className="flex flex-col m-10 items-center">
                <form className="group flex pt-5 px-24 m-5 flex-col text-4xl">
                    <label htmlFor="searchR"
                           className="flex font-semibold uppercase self-center pb-5 group-hover:text-indigo-500">Search:</label>
                    <input type="search" id="searchR" name="searchRecipes"
                           className="flex self-center placeholder:text-indigo-500 border-2 border-indigo-900 rounded-full w-full py-3 px-3 mx-36 shadow-lg group-hover:text-indigo-600 focus:outline-none group-hover:border-indigo-200 group-hover:ring-indigo-300 group-hover:ring-2 sm:text-sm"/>
                </form>
                <div className="flex-col mt-3">
                    <h2 className="text-xl font-bold flex justify-center">U can fill this input with such tags
                        as:</h2>
                    <div
                        className="grid grid-cols-6 content-center px-8 pb-5 pt-3 my-5 text-lg font-semibold border-y-2 rounded-3xl border-y-indigo-500">
                        <button
                            className="py-2 px-3 mx-10 my-2 w-24 justify-self-center border border-indigo-300 rounded-xl bg-indigo-100 text-indigo-500 hover:bg-indigo-500 hover:text-white hover:underline">Dinners
                        </button>
                        <button className="maintag">Meals</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                        <button className="maintag">tag</button>
                    </div>
                </div>
                <button
                    className="font-semibold text-3xl border-2 rounded-full bg-white text-indigo-700 hover:text-white hover:bg-indigo-700  border-indigo-700 my-5 py-2 px-3">Search
                    random recipe
                </button>
            </div>
            {/*Explore Section*/}
            <div className="border-t-2 pt-10 border-indigo-500">
                <h1 className="flex justify-center font-bold text-3xl uppercase text-indigo-700 pb-5">
                    Explore recipes
                </h1>
                {/*Cards list*/}
                <RecipeList/>
            </div>
        </div>
    )
}