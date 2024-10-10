import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/CatSitter/pages/HomePage";
import AboutPage from "./components/CatSitter/pages/AboutPage";
import SignInPage from "./components/CatSitter/pages/SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
