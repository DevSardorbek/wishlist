import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "../../api/index";
import Products from "../../components/products/Products";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <h2>
        Redux Toolkit <br /> Amaliyot
      </h2>
      <Products text={"Mahsulotlar"} data={products} />
    </div>
  );
}

export default Home;
