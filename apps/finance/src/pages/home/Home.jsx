import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home page - Finance
            </h1>
            <div style={{margin: "20px"}}>
                <Link to={import.meta.env.VITE_ANTHILL_URL}>Back to Anthill</Link>
            </div>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Home