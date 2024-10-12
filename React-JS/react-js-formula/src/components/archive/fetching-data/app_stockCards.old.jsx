import { useState, useEffect } from "react";
import StockItem from "./components/StockItem";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const fetchStocks = () => {
  //     fetch(
  //       "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setStocks(data);
  //         setIsLoading(false);
  //       });
  //   };

  const fetchStocks = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
    );
    const data = await response.json(); // .json is also an asynchronous call
    setStocks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const stockItems = stocks.map((stock, idx) => (
    <StockItem key={idx} stock={stock} />
  ));
  return (
    <div className="flex justify-center bg-slate-100">
      <div className="w-full max-w-md flex justify-center min-h-screen items-center">
        {isLoading ? (
          <i className="fa-duotone fa-spinner-third text-5xl text-blue-600 animate-spin"></i>
        ) : (
          <div className="flex flex-col w-full">{stockItems}</div>
        )}
      </div>
    </div>
  );
};

export default App;
