import Square from "./components/Square";
const App = () => {
  const squares = [];
  for (let i = 0; i < 399; i++) {
    squares.push(<Square key={i} />);
  }

  return (
    <div className="flex justify-center">
      <div className="mt-4 border border-black w-[603px] h-[602px] flex flex-wrap content-start">
        {squares}
      </div>
    </div>
  );
};

export default App;
