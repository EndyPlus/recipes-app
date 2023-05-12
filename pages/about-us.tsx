import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function AboutUsPage() {
    return (
        <div>
            {/*Header*/}
            <Header/>
            {/*About*/}

            <div className="flex flex-col min-h-screen">
                <div className="flex justify-around pt-24">
                    {/*Articles list*/}
                    <div className="flex p-16 mr-24 border border-indigo-900">
                        <ul>
                            <li className="font-bold text-xl py-3">
                                <h1>sdasads</h1>
                            </li>
                            <li className="font-bold text-xl py-3">
                                <h1>asdasdas</h1>
                            </li>
                            <li className="font-bold text-xl py-3">
                                <h1>addsads</h1>
                            </li>
                        </ul>
                    </div>

                    {/*Articles*/}
                    <div className="flex  p-24 mr-[15%] border border-indigo-900">
                        <div>
                            <article>
                                <h1>SMth</h1>
                                <p className="flex flex-wrap">dsfdddddddddddssssssf</p>
                            </article>
                            <article>
                                <h1>dfdsfd</h1>
                                <p>dfdsdsfddsddsdsd</p>
                            </article>
                            <article>
                                <h1>dsfds</h1>
                                <p>dfdsddsdsdsdfdfdsfdsfd</p>
                            </article>
                        </div>
                    </div>



                </div>

            </div>

            {/*Footer*/}
            <Footer/>
        </div>
    )
}