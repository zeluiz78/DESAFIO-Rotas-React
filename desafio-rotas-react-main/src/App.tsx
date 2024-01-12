import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import NotFound from "./routes/NotFound";
import Products from "./routes/Products";
import Books from "./routes/Products/Books";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import ProductsIndex from "./routes/Products/ProductsIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />}>
            <Route index element={<ProductsIndex />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
