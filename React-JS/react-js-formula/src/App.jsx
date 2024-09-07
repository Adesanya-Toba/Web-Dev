const App = () => {
  return (
    <div>
      <button className="text-green-300 border-2 border-green-500 px-8 py-2 m-4 rounded-md">
        first
      </button>
      <button className="text-white rounded-lg bg-sky-400 text-3xl px-10 py-4 m-4">
        second
      </button>
      <button className="bg-violet-100 text-violet-600 px-8 py-2 m-4 rounded-full">
        third
      </button>
      <button className="bg-cyan-200 text-cyan-700 p-10 m-4 rounded-lg hover:bg-cyan-700 hover:text-cyan-200">
        fourth
      </button>
    </div>
  );
};

export default App;
