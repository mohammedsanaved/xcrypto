import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorComponent from "./components/ErrorComponent";
import CoinsDetails from "./components/CoinsDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinsDetails />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
