import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-6xl mx-auto">
        <div className="flex justify-between p-5">
          <div>
            <Link to={"/"}>Logo </Link>
          </div>
          <ul className="flex gap-5">
            <NavLink to="/">
              <li>Home</li>{" "}
            </NavLink>
            <NavLink to="/about">
              <li>About</li>{" "}
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>{" "}
            </NavLink>
            <NavLink to="/movies">
              <li>Movies</li>{" "}
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
