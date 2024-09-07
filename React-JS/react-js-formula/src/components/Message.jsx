const Message = (props) => {
  const { text, bgColor } = props;
  console.log(bgColor);

  // Using the inputs from the Message to render the div using the builtin 'style' prop in the div.
  // Outside curly brace is , inside curly brace is to contain the js objects
  return <div style={{ background: bgColor }}>{text}</div>;
};

export default Message;
