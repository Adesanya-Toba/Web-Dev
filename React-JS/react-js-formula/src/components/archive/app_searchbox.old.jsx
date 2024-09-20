import Header from "./components/searchbox/Header";
import SearchBar from "./components/searchbox/SearchBar";
import Footer from "./components/searchbox/Footer";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default App;
