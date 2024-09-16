const SearchBar = () => {
  return (
    // Apply flex-1 to a child of a flex to allow it take up the remaining space within the parent.
    <div className="flex-1 flex flex-col justify-center items-center bg-orange-100">
      <div className="text-6xl text-orange-500 font-semibold mb-4">Loggle</div>

      <div className="flex bg-orange-200 border border-orange-300 p-2 rounded-full w-96">
        <i className="fa-solid fa-magnifying-glass text-xl text-orange-400 ml-1"></i>
        <input className="flex-1 bg-orange-200 mx-2" />
      </div>

      <div className="mt-2">
        <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">
          Loggle Search
        </button>
        <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">
          I'm feeling lucky!
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
