const Title = () => {
  return <div>Hello World</div>;
};

// Using the 'function' method to create components
function MySecondReactComponent() {
  return <div>My Second React Component!</div>;
}

const App = () => {
  return (
    <div>
      <Title />
      <MySecondReactComponent />
    </div>
  );
};

export default App;
