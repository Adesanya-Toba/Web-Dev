import FancyButton from "./components/FancyButton";
const App = () => {
  return (
    <div>
      <FancyButton>Click Me</FancyButton>
      <FancyButton large={true}>Submit</FancyButton>
    </div>
  );
};

export default App;
