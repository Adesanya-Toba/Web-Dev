import { useState } from "react";
import clsx from "clsx";

export default function Square() {
  const [isLight, setIsLight] = useState(true);
  return (
    <>
      <div
        className={clsx(
          "h-[30px] w-[30px] border border-stone-400 cursor-pointer", // Adding artificial cursor when we hover because we didn't use a button
          isLight ? "bg-stone-300" : "bg-stone-500"
        )}
        onClick={() => setIsLight(!isLight)} // Adding on click to a div
      ></div>
    </>
  );
}
