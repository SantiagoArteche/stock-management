import { useEffect, useState } from "react";
import { Product } from "../../components/Product";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:7070/api/products/${id}`, {
      method: "DELETE",
    }).then((res) => res);
    setCount((prev) => prev + 1);
  };

  const listAllProducts = async () => {
    const response = await fetch("http://localhost:7070/api/products").then(
      (res) => res.json()
    );

    setProducts(response);
  };

  useEffect(() => {
    listAllProducts();
  }, [count]);
  return (
    <div>
      <h1 className="text-center mt-4 mb-8 text-5xl">Products</h1>

      {products.length ? (
        <div className="px-[500px] py-5">
          <table className="w-full">
            <thead className="text-2xl bg-black text-white">
              <th className="p-3">Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </thead>
            <tbody className="text-center">
              {products.map((product) => (
                <Product
                  key={product.id}
                  {...product}
                  deleteProduct={deleteProduct}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2 className="text-center text-3xl">{`You don't have any products :(`}</h2>
        </div>
      )}
    </div>
  );
};
