const QuoteBox1 = (props) => {
  const { quote } = props;

  return (
    <div className="flex flex-col m-4">
      <div className="bg-cyan-500 py-8 px-6 w-[400px]  text-cyan-200 rounded-t-lg">
        {quote.text}
      </div>
      <div className="bg-stone-100 p-4 flex flex-col items-center rounded-b-lg border border-stone-300">
        <div className="text-cyan-700 text-2xl mb-2">{quote.author}</div>
        <div className="text-stone-600">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox1;
