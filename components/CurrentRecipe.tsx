import React from "react";
import Image from "next/image"
import {IRecipeInfo, IRecipes} from "@/models/IRecipes";
import TestImg from "@/assets/recipeimg.jpg"

interface CurrentRecipe {
    recipe: IRecipeInfo;
}

const CurrentRecipe: React.FC<CurrentRecipe> = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/*Recipe*/}
            <div>
                <article className="flex flex-col items-center justify-between">
                    <div className="flex flex-col items-start pl-64">
                        {/*Recipe Name and Image*/}
                        <div className="flex flex-col items-center ml-[15%] mb-10">
                            <h1 className="font-bold uppercase text-5xl text-indigo-500 pt-10 pb-10">Title</h1>
                            <Image src={TestImg} alt={"Img"} width={500} height={500}
                                   className="object-cover p-2 border-4 border-indigo-900"/>
                            <div>
                                <p></p><p></p><p></p><p></p>
                            </div>
                        </div>


                        {/*SummaryBlock*/}
                        <div className="flex mr-80 mt-10 mb-5 bg-indigo-200 p-4 rounded-xl text-indigo-700">
                            <p>If you have roughly <b>45 minutes</b> to spend in the kitchen, Coconut Rice Pudding might
                                be a
                                tremendous <b>gluten free and lacto ovo vegetarian</b> recipe to try. One portion of
                                this dish
                                contains approximately <b>10g of protein</b>, <b>10g of fat</b>, and a total of <b>574
                                    calories</b>. This recipe serves 2. For <b>$1.23 per serving</b>, this recipe <b>covers
                                    17%</b> of your daily requirements of vitamins and minerals. 32 people have tried
                                and liked
                                this recipe. It is brought to you by Afrolems. If you have coconut, coconut milk, tuwo
                                rice, and
                                a few other ingredients on hand, you can make it. Taking all factors into account, this
                                recipe <b>earns a spoonacular score of 58%</b>, which is pretty good. Similar recipes
                                are The Secret Ingredient (Coconut): Double Coconut Rice Pudding, Coconut Rice Pudding,
                                and Coconut Rice Pudding.</p>
                        </div>


                        {/*Ingredients*/}
                        <div className="flex flex-col my-4 ">
                            <h2 className="text-3xl font-bold mb-2 text-indigo-800">Ingredients:</h2>
                            <ul className="grid grid-cols-5 gap-x-8 text-xl py-2">
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <h2 className="mb-2">Name</h2>
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <p className="mt-2">Count: 3</p>
                                </li>
                            </ul>
                        </div>


                        {/*Equipment*/}
                        <div className="flex flex-col my-4 ">
                            <h2 className="text-3xl font-bold mb-2 text-indigo-800">Equipment:</h2>
                            <ul className="grid grid-cols-5 gap-x-8 text-xl py-2">
                                <li className="flex flex-col items-center mt-5">
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <h2 className="mt-2">Name</h2>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <h2 className="mt-2">Name</h2>
                                </li>
                                <li className="flex flex-col items-center mt-5">
                                    <Image src={TestImg} alt="Ingredient" width={200} height={200}/>
                                    <h2 className="mt-2">Name</h2>
                                </li>
                            </ul>
                        </div>
                        {/*Instruction*/}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold mb-2 text-indigo-800">Instruction:</h2>
                            <p>
                                <ol>
                                    <li>For the torte: Whip the egg whites with the dash of salt until they form stiff
                                        peaks.
                                    </li>
                                    <li>Whip in the honey and gently fold into the ground almonds and cardamom seeds.
                                    </li>
                                    <li>Place mixture on well greased trays (or use baking paper). I like to divide the
                                        mixture into four on two trays.
                                    </li>
                                    <li>Spread the mixture out to about a 3/4 of an inch thick and in a circle.</li>
                                    <li>Bake at about 250 to 300 degrees F for around 15 minutes. Keep an eye on them
                                        and dont let them burn on the bottom.
                                    </li>
                                    <li>For the cherry filling: I advise soaking the dates in boiling water for about 5
                                        minutes and put them through a tami or puree them so any skins are removed.
                                    </li>
                                    <li>Heat the cherries and water gently in a saucepan with the lid on until they are
                                        hot.
                                    </li>
                                    <li>Remove the lid and add the dates and reduce the juices down.</li>
                                    <li>Turn the heat off and cool slightly before adding the rose water.</li>
                                    <li>To put the torte together: Whip fresh cream and add honey.</li>
                                    <li>On one layer of torte add the cherries and then the cream.</li>
                                    <li>Put another layer of torte and repeat.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default CurrentRecipe;