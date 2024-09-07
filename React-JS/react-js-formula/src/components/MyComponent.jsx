const MyComponent = (props) => {
  // Children is the default object passed into a div
  const { children, bgColor, height } = props;
  console.log(props);
  return (
    <div style={{ background: bgColor, height: height + "px" }}>{children}</div>
  );
};

export default MyComponent;
