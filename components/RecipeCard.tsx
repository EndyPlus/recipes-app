import Image from "next/image";
import TestImg from "@/assets/recipeimg.jpg";


export default function RecipeCard() {
    return (
        <div className="group">
            <div className="border-2 bg-white rounded-lg overflow-hidden group-hover:border-indigo-700 cursor-pointer">
                <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h2 className="font-bold text-xl text-indigo-500 mb-2 group-hover:underline">Name</h2>
                    <p className="text-indigo-400">Description</p>
                </div>
            </div>
        </div>
    )
}