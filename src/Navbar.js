import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* value of style is going to be an object itself hence another brace inside */}
        {/* outer braces indicate dynamic val and inside ones indicate js object */}
        {/* inside object we do key value pairs */}
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
