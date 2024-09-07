// Using boolean values in props
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

export default Box;
