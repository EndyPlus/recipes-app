import Image from "next/image";
import TestImg from "@/assets/recipeimg.jpg";
// import {useGetRandomRecipesQuery} from "@/pages/api/recipesApi";



export const RecipeCard = () => {

    // const { data: recipes, isError, isLoading } = useGetRandomRecipesQuery({});
    // console.log({data: recipes});
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

// <div className="group">
//     <div className="border-2 bg-white rounded-lg overflow-hidden group-hover:border-indigo-700 cursor-pointer">
//         <Image src={TestImg} alt="Recipe" className="w-full h-48 object-cover"/>
//         <div className="p-4">
//             <h2 className="font-bold text-xl text-indigo-500 mb-2 group-hover:underline">
//                 {recipes?.recipes[0]?.title} {/* Припустимо, що відповідь містить поле "title" */}
//             </h2>
//             <p className="text-indigo-400">
//                 {recipes?.recipes[0]?.tags} {/* Припустимо, що відповідь містить поле "description" */}
//             </p>
//         </div>
//     </div>
// </div>





// interface Recipe {
//     id: number;
//     title: string;
//     image: string;
//     tags: string[];
// }
//
// export function RecipeCard({ recipe }: { recipe: Recipe }) {
//     return (
//         <div className="p-4 bg-white rounded-lg shadow-md">
//             <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md mb-2" />
//             <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
//             <div className="flex flex-wrap">
//                 {recipe.tags.map(tag => (
//                     <span key={tag} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tag}</span>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
