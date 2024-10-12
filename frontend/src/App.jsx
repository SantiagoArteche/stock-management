import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Add } from "./pages/add/Add";
import { Update } from "./pages/update/Update";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<Home />} path="/" />
          <Route element={<Add />} path="/add" />
          <Route element={<Update />} path="/update/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
