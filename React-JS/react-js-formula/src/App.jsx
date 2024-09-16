import Header from "./components/searchbox/Header";
import SearchBar from "./components/searchbox/SearchBar";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <SearchBar />
    </div>
  );
};

export default App;
