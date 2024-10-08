import { useState } from "react";

import CatCard from "./components/CatCarousel/CatCard";
import NavButton from "./components/CatCarousel/NavButton";
import CATS from "./components/CatCarousel/cats";

const App = () => {
  const [catIndex, setCatIndex] = useState(4);
  return (
    <div className="flex justify-center items-center">
      <NavButton
        icon={"fa-circle-chevron-left"}
        show={catIndex > 0}
        onClick={() => setCatIndex(catIndex - 1)}
      />
      <CatCard cat={CATS[catIndex]} />
      <NavButton
        icon={"fa-circle-chevron-right"}
        show={catIndex < CATS.length - 1}
        onClick={() => setCatIndex(catIndex + 1)}
      />
    </div>
  );
};

export default App;
