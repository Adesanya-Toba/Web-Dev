import { useState } from "react";

import Back from "./Back";
import Front from "./Front";

const PlayingCard = (props) => {
  const { value, icon, color } = props;
  const [isFlipped, setIsFlipped] = useState(true);
  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? <Front value={value} icon={icon} color={color} /> : <Back />}
    </div>
  );
};

export default PlayingCard;
