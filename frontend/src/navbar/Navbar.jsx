import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-96 items-center bg-blue-700 py-4 text-white">
        <Link to="/">
          <h1 className="text-5xl font-bold">Stock Manager</h1>
        </Link>
        <Link to="/add" className="text-2xl font-semibold">
          Add Product
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
