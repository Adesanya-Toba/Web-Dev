import { useState } from "react";
import clsx from "clsx";
import ToggleButton from "./components/ToggleButton";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={clsx(
        "flex justify-center p-4 min-h-screen",
        isDark ? "bg-neutral-800 text-neutral-200" : "bg-white text-black"
      )}
    >
      <div className="w-full max-w-4xl flex flex-col items-center">
        <ToggleButton
          onClick={() => setIsDark(!isDark)}
          label="dark mode"
          enabled={isDark}
        />
        <p className="my-4">
          Coffee, often hailed as the elixir of wakefulness, has woven itself
          into the fabric of daily life for millions around the globe. Derived
          from the beans of the Coffea plant, this beverage has transcended its
          origins to become a cultural phenomenon, appreciated for its rich
          flavor, stimulating properties, and its ability to bring people
          together. As the aroma of freshly brewed coffee permeates the air, it
          triggers a sensory journey that extends far beyond the simple act of
          consumption.
        </p>
        <p className="my-4">
          The journey of coffee begins with the cultivation of coffee beans in
          equatorial regions worldwide. These beans undergo a meticulous process
          of harvesting, drying, roasting, and grinding before they finally
          transform into the dark elixir that graces countless cups each day.
          The diversity in coffee varieties and brewing methods has given rise
          to a myriad of flavors, ranging from the robustness of a dark roast to
          the subtle nuances of a light, fruity blend. This variety caters to
          the individual preferences of coffee enthusiasts, making it a
          versatile and personalized experience.
        </p>
        <p className="my-4">
          Beyond its sensory delights, coffee plays a pivotal role in social
          interactions and gatherings. Coffeehouses have become the modern-day
          social hubs, fostering conversations, idea exchanges, and even moments
          of quiet contemplation. The ritual of sharing a cup of coffee
          transcends cultural boundaries, providing a universal language that
          brings people together. Whether in bustling urban cafes or quaint
          corner shops, the communal act of sipping coffee creates an atmosphere
          that encourages connection and camaraderie.
        </p>
        <p className="my-4">
          In conclusion, coffee stands as more than just a caffeinated beverage;
          it is a cultural phenomenon that has permeated every corner of the
          globe. From its humble origins as a regional delicacy to its current
          status as a global staple, coffee's journey is a testament to its
          enduring appeal. Beyond its rich flavor profile and energizing
          properties, coffee serves as a catalyst for social connections, a
          canvas for personal preferences, and a potential contributor to
          overall health. As the world continues to evolve, coffee remains a
          constant, weaving itself into the daily rituals and moments that
          define the human experience.
        </p>
      </div>
    </div>
  );
};

export default App;
