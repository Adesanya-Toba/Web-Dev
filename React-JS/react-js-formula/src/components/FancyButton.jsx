const FancyButton = (props) => {
  const { children, large } = props;

  const largeStyle = large ? "text-3xl rounded-full" : "text-base rounded-lg";
  return (
    <button
      className={`${largeStyle} text-blue-400 font-semibold bg-sky-300 px-10 py-2 rounded m-8 hover:bg-sky-700 border border-sky-400 shadow`}
    >
      {children}
    </button>
  );
};

export default FancyButton;
