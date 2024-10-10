// import PlayingCard from "./components/PlayingCard";
import PlayingCard from "./components/PlayingCard";

const App = () => {
  return (
    <div className="flex justify-center">
      <PlayingCard value="A" icon="fa-heart" color="text-red-500" />
      <PlayingCard value="10" icon="fa-spade" color="text-black" />
      <PlayingCard value="2" icon="fa-diamond" color="text-green-500" />
    </div>
  );
};

export default App;
