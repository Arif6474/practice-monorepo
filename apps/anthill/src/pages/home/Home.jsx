import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home page - anthill</h1>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Home