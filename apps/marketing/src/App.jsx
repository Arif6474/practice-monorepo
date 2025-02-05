// apps/main/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import "./App.css";
import Blog from "./pages/blog/Blog";
import News from "./pages/news/news";
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
