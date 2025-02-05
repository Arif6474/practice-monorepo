import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home page - Marketing</h1>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/news">News</Link>
        </div>
    )
}

export default Home