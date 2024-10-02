import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const bgColor = isOn ? "bg-yellow-200" : "bg-slate-600"; // Using clsx instead
  return (
    <div
      className={clsx(
        "h-screen flex justify-center items-center",
        isOn ? "bg-yellow-200" : "bg-slate-600"
      )}
    >
      <button onClick={() => setIsOn(!isOn)}>
        <div
          className={clsx("h-12 w-8", isOn ? "bg-slate-200" : "bg-slate-400")}
        ></div>
        <div
          className={clsx("h-12 w-8", isOn ? "bg-slate-400" : "bg-slate-200")}
        ></div>
      </button>
    </div>
  );
};

export default App;
