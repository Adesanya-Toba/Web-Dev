import { useState } from "react";

const App = () => {
  const [numBlocks, setNumBlocks] = useState(1);
  const blocks = [];
  for (let i = 0; i < numBlocks; i++) {
    /** When rendering components with for loops, remember to add
     * the key prop as this helps React efficiently update the screen as
     * it requires a unique key in every render.
     *
     * You can then use the index of the element as its key
     * because indices will be unique among elements of the array.
     */
    blocks.push(<div className="w-24 h-8 bg-green-400 m-2" key={i}></div>);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-end">
      <div className="border-b-4 border-neutral-500">{blocks}</div>
      <div>
        <button
          className="p-2 rounded-lg bg-yellow-200 text-yellow-600 m-2"
          onClick={() => {
            if (numBlocks > 1) setNumBlocks(numBlocks - 1);
          }}
        >
          remove block
        </button>
        <button
          className="p-2 rounded-lg bg-blue-200 text-blue-600 m-2"
          onClick={() => {
            if (numBlocks < 10) setNumBlocks(numBlocks + 1);
          }}
        >
          add block
        </button>
      </div>
    </div>
  );
};

export default App;
