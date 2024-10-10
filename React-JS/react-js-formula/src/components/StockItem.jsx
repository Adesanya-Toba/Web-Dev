import clsx from "clsx";

const StockItem = (props) => {
  const { stock } = props;

  const priceDiff = stock.current_price - stock.previous_price;
  const percentChange = (priceDiff / stock.previous_price) * 100;
  return (
    <div className="border border-slate-200 m-2 p-4 bg-white flex justify-between">
      <div>
        <div className="text-slate-600">{stock.name}</div>
        <div className="text-blue-500 text-2xl">{stock.symbol}</div>
      </div>
      <div className="flex flex-col items-end">
        <div
          className={clsx(
            "text-sm  p-1  rounded-full w-16 text-center",
            percentChange >= 0
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-700"
          )}
        >
          {percentChange.toFixed(2)}%
        </div>
        <div className="text-slate-700 text-2xl">
          ${stock.current_price / 100}
        </div>
      </div>
    </div>
  );
};

export default StockItem;
