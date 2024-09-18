import { useState } from "react";

const Widget2 = () => {
  const [toggleColor, setToggleColor] = useState(true);
  return (
    <div className="bg-sky-100 border border-sky-300 p-4 rounded-lg m-4 flex flex-col items-center">
      <button
        className={`px-4 py-2 ${
          toggleColor ? "bg-blue-500" : "bg-orange-500"
        } text-white rounded-full`}
        onClick={() => setToggleColor(!toggleColor)}
      >
        click me!
      </button>
    </div>
  );
};

export default Widget2;
