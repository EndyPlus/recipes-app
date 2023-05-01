
export default function Header() {
    return (
        <header>
            {/*Container*/}
            <div className="px-24 flex justify-between p-5 text-indigo-500 bg-indigo-700 shadow-xl shadow-indigo-300">
            {/*Logo*/}
                <a className="flex font-bold text-5xl text-white p-3 border border-indigo-200 rounded-full bg-indigo-600 cursor-pointer hover:text-indigo-600 hover:bg-white hover:border-indigo-900">Recipes</a>
            {/*Navigation*/}
                <nav className="flex items-center text-xl font-semibold">
                <ul className="inline-flex items-center text-indigo-200 hover:text-white cursor-pointer">
                    <li className="header-li">Home</li>
                    <li className="header-li">About</li>
                </ul>
                <form>
                    <input className="placeholder:text-indigo-500 border-2 border-indigo-900 rounded-full py-2 pl-5 pr-3 shadow-lg focus:outline-none focus:border-indigo-200 focus:ring-indigo-300 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="search" />
                </form>
                <button className="inline-block text-indigo-200 hover:text-white hover:underline hover:font-semibold ml-5">Login</button>
            </nav>
            </div>
        </header>
    )
}