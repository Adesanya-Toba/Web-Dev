const Joke = (props) => {
  const { joke, showAnswer } = props;
  return (
    <div className="flex flex-col items-center p-4 ">
      <div className="text-3xl text-gray-600">{joke.question}</div>

      {showAnswer && (
        <div className="text-lg text-blue-500 mt-4">{joke.answer}</div>
      )}
    </div>
  );
};

export default Joke;
