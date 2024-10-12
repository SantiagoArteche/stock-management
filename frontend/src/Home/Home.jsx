import { useEffect, useState } from "react";
import { Product } from "../../components/Product";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listAllProducts();
  }, []);

  const listAllProducts = async () => {
    const response = await fetch("http://localhost:7070/api/products").then(
      (res) => res.json()
    );

    setProducts(response);
  };
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
