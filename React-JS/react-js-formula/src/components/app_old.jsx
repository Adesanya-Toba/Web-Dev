/** Understanding Destructing/Unpacking */

import MyComponent from "./components/MyComponent";
import Box from "./components/Box";
import Message from "./components/Message";

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

const App = () => {
  return (
    <div>
      <Title />
      <MySecondReactComponent />
      <Message text="this is my first prop" bgColor="Red" />
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
      <MyComponent bgColor="Yellow" height={40}>
        Children is the default object
      </MyComponent>
      <MyComponent bgColor="Pink" height={90}>
        Nothing much.
      </MyComponent>
    </div>
  );
};

export default App;
