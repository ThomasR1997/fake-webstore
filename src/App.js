import { useState } from "react";
import "./App.css";
import { ApiContext } from "./contextState/ApiContext";
import { FetchApi } from "./components/fetchApi/FetchApi";
import { Navbar } from "./components/navbar/Navbar";
import { CartContext } from "./contextState/CartContext";
import { Footer } from "./components/footer/Footer";

function App() {
  const [apiData, setApiData] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <div className="App">
          <FetchApi />
          <Navbar />
          <Footer />
        </div>
      </CartContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
