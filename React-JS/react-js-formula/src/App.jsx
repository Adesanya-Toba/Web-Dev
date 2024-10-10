import { useState } from "react";
import CookieRecipe from "./components/CookieRecipe";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-purple-700 flex py-4 justify-center">
        <div className="flex justify-between w-full max-w-4xl px-4 text-purple-200">
          <div className="text-2xl ">Toba's Recipes</div>
          <button onClick={() => setIsModalOpen(true)}>
            <i className="fa-solid fa-right-to-bracket mr-2"></i>Sign In
          </button>
        </div>
      </div>

      <CookieRecipe />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
