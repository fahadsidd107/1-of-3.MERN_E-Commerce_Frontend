import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart /> */}
      <Router>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
