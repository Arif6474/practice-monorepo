// apps/main/src/components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <a href="http://localhost:5174">Finance</a>
      <a href="http://localhost:5175">Marketing</a>
    </nav>
  );
};

export default Navbar;
