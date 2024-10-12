import { Link } from "react-router-dom";

export const Product = ({ id, name, description, price, deleteProduct }) => {
  return (
    <tr className={`text-xl ${id % 2 != 0 && "bg-gray-200"}`}>
      <td className="p-4">{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>

      <td>
        <Link to={`/update/${id}`}>
          <button className="bg-yellow-600 p-2 rounded my-5 text-white font-semibold">
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          className="bg-red-700 p-2 rounded my-5 text-white font-semibold"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
