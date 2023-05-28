import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div>
            {/*Header*/}
            <Header/>
            {/*Main*/}
            <MainPage />
            {/*Footer*/}
            <Footer/>
        </div>
    )
}
