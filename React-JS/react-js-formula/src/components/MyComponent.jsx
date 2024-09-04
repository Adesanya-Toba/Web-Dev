const MyComponent = (props) => {
  const { children, bgColor, height } = props;
  console.log(props);
  return (
    <div style={{ background: bgColor, height: height + "px" }}>{children}</div>
  );
};

export default MyComponent;
