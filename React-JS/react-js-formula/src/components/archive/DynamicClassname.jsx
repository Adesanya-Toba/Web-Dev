const App = () => {
  const boolean = false;
  const color = "green";
  // return <div className={`bg-${boolean ? "orange" : "purple"}-600`}>todo</div>;
  return (
    <div
      className={`${boolean ? "bg-orange-600" : "bg-purple-600"} text-white`}
    >
      todo
    </div>
  );
};

export default App;
