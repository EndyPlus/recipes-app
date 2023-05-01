import Image from "next/image";
import TestImg from "../assets/recipeimg.jpg";

export default function MainPage() {
    return (
        <div>
            {/*Search block*/}
            <div
                className="flex flex-col bg-indigo-200 border border-indigo-500 rounded-[100px] m-10 justify-center items-center">
                <form className="flex m-5 border-b border-indigo-500 flex-col ">
                    <label htmlFor="searchR" className="flex font-semibold uppercase px-[50%]">Search:</label>
                    <input type="search" id="searchR" name="searchRecipes" className="flex mx-96"/>
                </form>
                <div className="grid grid-cols-5 content-center py-5 border border-indigo-500">
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
                <button className="font-semibold text-indigo-500 border border-indigo-700 my-5 py-2 px-3">I`m feeling
                    lucky
                </button>
            </div>

            {/*Explore Section*/}
            <div>
                <h1 className="font-bold text-xl uppercase text-indigo-700 border-b border-indigo-500 pb-5">Explore
                    recipes</h1>
                {/*Cards list*/}
                <div className="grid grid-cols-3 m-4 justify-evenly gap-5">
                    {/*cards*/}
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>


                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                    <div className="border bg-white rounded-lg overflow-hidden">
                        <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl text-indigo-500 mb-2">Name</h2>
                            <p className="text-indigo-400">Description</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}