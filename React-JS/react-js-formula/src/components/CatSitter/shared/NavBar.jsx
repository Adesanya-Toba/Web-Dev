import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="bg-amber-50 flex justify-center font-open">
      <div className="flex justify-between w-full max-w-5xl items-center">
        <Link
          className="font-bubblegum text-green-800 text-2xl flex flex-col items-center px-8 pt-2"
          to="/"
        >
          <img
            className="w-32 mb-2"
            src="https://static-task-assets.react-formula.com/102167.png"
            alt=""
          />
          Carl's Cat Sitters
        </Link>
        <div className="text-amber-900/40">
          <Link
            className={clsx(
              "mx-3",
              location.pathname === "/" && "text-amber-900"
            )}
            to="/"
          >
            <i className="mr-2 text-xl fas fa-home"></i>Home
          </Link>
          <Link
            className={clsx(
              "mx-3",
              location.pathname === "/about" && "text-amber-900"
            )}
            to="/about"
          >
            <i className="mr-2 text-xl fas fa-comment"></i>About
          </Link>
          <Link className="mx-3" to="/sign-in">
            <i className="mr-2 text-xl fas fa-sign-in"></i>SignIn
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
