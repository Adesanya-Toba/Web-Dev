/** Understanding Destructing/Unpacking */
/** Create a JS object */
const obj = { obj_name: "Toba", job: "engineer" };
const { obj_name } = obj; // unpacks just the object name from the obj

console.log(obj_name);

const Title = () => {
  return <div>Hello World</div>;
};

// Using the 'function' method to create components
function MySecondReactComponent() {
  return <div>My Second React Component!</div>;
}

const Message = (props) => {
  const { text, bgColor } = props;
  console.log(bgColor);

  // Using the inputs from the Message to render the div using the builtin 'style' prop in the div.
  return <div style={{ background: bgColor }}>{text}</div>;
};

const App = () => {
  return (
    <div>
      <Title />
      <MySecondReactComponent />
      <Message text="this is my first prop" bgColor="Red" />
      <Message text="hello" bgColor="White" />
      <Message text="bye" bgColor="Blue" />
    </div>
  );
};

export default App;
