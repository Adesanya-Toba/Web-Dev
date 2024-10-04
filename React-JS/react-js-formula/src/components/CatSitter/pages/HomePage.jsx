import NavBar from "../shared/NavBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-start justify-center min-h-screen bg-amber-50 font-open">
        <div className="flex flex-wrap items-center justify-center w-full max-w-5xl px-6 pt-24">
          <div className="my-20">
            <h1 className="text-6xl text-red-700 mb-4 max-w-[320px] font-bubblegum">
              Cat Sitters You Can Trust
            </h1>
            <div className="max-w-sm text-xl leading-relaxed text-amber-600">
              Friendly cat lovers to watch over your feline friend while you are
              away
            </div>
            <div className="my-4">
              <Link
                className="px-20 py-3 my-8 text-xl font-medium text-white bg-green-800 rounded-full"
                to="/sign-in"
              >
                Sign In
              </Link>
            </div>
          </div>
          <img
            className="w-[420px] mx-4"
            src="https://static-task-assets.react-formula.com/331441.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
