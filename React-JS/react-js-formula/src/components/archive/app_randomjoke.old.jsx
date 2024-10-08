import { useState, useEffect } from "react";
import Joke from "./components/Joke";

const App = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [joke, setJoke] = useState(null);

  const fetchJoke = () => {
    setShowAnswer(false);
    fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {joke && <Joke joke={joke} showAnswer={showAnswer} />}

      <button
        className="bg-green-500 rounded-lg text-green-200 p-3 mt-2"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        Reveal answer
      </button>
      <button
        className="bg-red-500 rounded-lg text-red-200 p-3 mt-4"
        onClick={fetchJoke}
      >
        Get new joke
      </button>
    </div>
  );
};

export default App;
