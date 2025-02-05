import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home page - Finance</h1>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Home