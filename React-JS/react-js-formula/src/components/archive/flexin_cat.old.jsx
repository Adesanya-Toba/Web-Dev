import Cat from "./components/Cat";

const App = () => {
  return (
    <div>
      <div className="flex justify-center h-64 p-4 m-4 border-2 border-blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-between h-64 p-4 m-4 border-2 border-red-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-center items-center h-64 p-4 m-4 border-2 border-green-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-around items-end h-64 p-4 m-4 border-2 border-purple-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex justify-between items-center h-64 p-4 m-4 border-2 border-orange-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
    </div>
  );
};

export default App;
