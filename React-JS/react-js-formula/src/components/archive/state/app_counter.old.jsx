import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center h-screen items-center text-4xl">
      <button
        className=" bg-red-400 rounded-lg w-8 pb-1 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <div className="m-4 text-neutral-400 w-20 text-center">{count}</div>
      <button
        className="bg-emerald-400 rounded-lg w-8 pb-1 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
