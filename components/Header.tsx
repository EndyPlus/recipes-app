
export default function Header() {
    return (
        <header className="px-24 flex justify-between p-5 text-indigo-500 border-b-2 border-indigo-900 bg-indigo-700">
            <a className="font-bold text-3xl border border-indigo-300 rounded-full hover:text-indigo-800">Recipes</a>
            <nav className="flex items-center">
                <ul className="inline-flex items-center">
                    <li className="header-li">Home</li>
                    <li className="header-li">About</li>
                </ul>
                <form>
                    <input className="inline-flex mx-10" type="search" />
                </form>
                <button className="inline-block hover:text-indigo-800 hover:underline hover:font-semibold">Login</button>
            </nav>
        </header>
    )
}