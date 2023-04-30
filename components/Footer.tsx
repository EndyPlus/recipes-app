
export default function Footer() {
    return (
        <footer>
            {/*Footer Container*/}
            <div className="flex bg-indigo-200 p-10 justify-evenly">
                <div>
                    <ul>
                        <li><a href="#">Meals</a></li>
                        <li><a href="#">Dinner</a></li>
                        <li><a href="#">Cuisines</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Links</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Follow Us</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Socials</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}