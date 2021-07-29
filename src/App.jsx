import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { Navbar } from "./Components/Navbar";
import { ProductDetails } from "./Components/ProductDetails";
import { useEffect, useState } from "react";

export default function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        handleProduct(json);
      });
  }, []);
  const handleProduct = (value) => {
    setProduct(value);
  };
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Products">
          <Products product={product} />
        </Route>
        <Route path="/Product/:id">
          <ProductDetails product={product} />
        </Route>
      </Switch>
    </div>
  );
}
