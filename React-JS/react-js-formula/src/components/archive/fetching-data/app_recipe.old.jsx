import { useState } from "react";
import RecipeCard from "./components/RecipeCard";

const RECIPE = {
  name: "Pho",
  image_url: "https://static-task-assets.react-formula.com/239035.jpg",
};

const App = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/using-fetch/recipes"
    )
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {recipe !== null ? <RecipeCard recipe={recipe} /> : null}

      <button
        className="rounded-full mt-4 px-4 py-2 bg-blue-500 text-white"
        onClick={fetchRecipe}
      >
        Get random recipe
      </button>
    </div>
  );
};

export default App;
