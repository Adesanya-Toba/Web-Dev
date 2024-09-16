const QuoteBox3 = (props) => {
  const { quote } = props;
  return (
    <div className="flex flex-col items-start mb-4">
      <div className="text-lg bg-rose-400 p-6 text-white rounded-t-lg rounded-br-lg">
        {quote.text}
      </div>
      <div className="border-b-2 border-l-2 border-r-2 border-rose-400 p-4 bg-rose-100 rounded-b-lg">
        <div className="text-rose-700 text-xl">{quote.author}</div>
        <div className="text-rose-500">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox3;
