// apps/main/src/components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <a href={import.meta.env.VITE_FINANCE_URL}>Finance</a>
      <a href={import.meta.env.VITE_MARKETING_URL}>Marketing</a>
    </nav>
  );
};

export default Navbar;
