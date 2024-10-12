import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

export const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
    },
    onSubmit: async (val) => {
      const response = await fetch(`http://localhost:7070/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, ...val }),
      });

      if (response.ok) navigate("/");
      else console.log(response.status);
    },
    validateOnChange: false,
  });

  return (
    <div>
      <h1 className="text-center text-5xl mt-4 mb-8">Update Product</h1>
      <form onSubmit={handleSubmit} className="px-[700px]">
        <div className="bg-blue-600 rounded py-10 gap-4 flex flex-col justify-center px-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xl font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              {...getFieldProps("name")}
              className="border-4 border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xl font-semibold text-white">
              Description
            </label>
            <input
              type="text"
              {...getFieldProps("description")}
              className="border-4 border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xl font-semibold text-white">
              Price
            </label>
            <input
              type="number"
              step="any"
              {...getFieldProps("price")}
              className="border-4 border-gray-400 p-2 rounded"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-white py-2 text-xl font-bold rounded px-10 mt-10"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
