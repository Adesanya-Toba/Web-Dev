import songs from "./components/songs";
import SongItem from "./components/SongItem";

const App = () => {
  const songItems = songs.map((song, idx) => (
    <SongItem key={idx} song={song} />
  ));
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">{songItems}</div>
    </div>
  );
};

export default App;
