import { useState } from "react";

// Using square brackets to unpack an array
const array = ["one", "two", "three"];
const [first, second] = array; // Using curly brackets results in undefined
// console.log(first);
// console.log(second);

const App = () => {
  const [message, setMessage] = useState("Hello World!"); // Array destructure Returns an array of two things

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl text-stone-400">{message}</div>
      <div className="mt-4">
        <button
          className="m-2 px-4 py-2 text-white bg-green-400 rounded-md"
          onClick={() => {
            setMessage("bye!");
          }}
        >
          one
        </button>
        <button
          className="m-2 px-4 py-2 text-white bg-orange-400 rounded-md"
          onClick={() => {
            setMessage("yaay!!!");
          }}
        >
          two
        </button>
        <button
          className="m-2 px-4 py-2 text-white bg-blue-400 rounded-md"
          onClick={() => setMessage("Wooo!")}
        >
          three
        </button>
      </div>
    </div>
  );
};

export default App;
