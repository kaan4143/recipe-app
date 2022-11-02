import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-200 p-3 flex justify-between">
      <div className="">
        <NavLink
          to="/home"
          className="text-gray-400 hover:text-blue-300"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          Home
        </NavLink>
      </div>
      <div className="flex gap-5">
        <NavLink
          to="/about"
          className="text-gray-400 hover:text-blue-300 transition ease-in-out hover:scale-125"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          About
        </NavLink>
        <a
          href="https://github.com/kaan4143"
          rel="noreferrer"
          target="_blank"
          className="text-gray-400 hover:text-blue-300 transition ease-in-out hover:scale-125"
        >
          Github
        </a>
        <Link
          to="/"
          className="text-gray-400 hover:text-blue-300 transition ease-in-out hover:scale-125 "
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
