/** Understanding Destructing/Unpacking */
/** Create a JS object */
const obj = { obj_name: "Toba", job: "engineer" };
const { obj_name } = obj; // unpacks just the object name from the obj

// console.log(obj_name);

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
  // Outside curly brace is , inside curly brace is to contain the js objects
  return <div style={{ background: bgColor }}>{text}</div>;
};

// Using boolea values in props
const Box = (props) => {
  const { label, textColor, bgColor, large } = props;
  console.log(large);

  return (
    <div
      style={{
        color: textColor,
        background: bgColor,
        fontSize: large ? "40px" : "18px",
      }}
    >
      {label}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* <Title />
      <MySecondReactComponent />
      <Message text="this is my first prop" bgColor="Red" />
      <Message text="hello" bgColor="White" />
      <Message text="bye" bgColor="Blue" /> */}
      <Box
        label="time to review"
        textColor="Grey"
        bgColor="skyblue"
        large={true}
      />{" "}
      {/*Curly brace to evaluate the JS*/}
      <Box label="hello" textColor="Purple" bgColor="Lavender" large={false} />
      <Box label="green stuff" textColor="white" bgColor="green" />{" "}
      {/*Large property is not passed so it acts as undefined. */}
    </div>
  );
};

export default App;
