import "./styles.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <main>
      <section>
        <div className="container">
          <nav className="products-navbar">
            <NavLink
              to="computers"
              className={({ isActive }) =>
                isActive
                  ? "products-navbar-item products-navbar-item-active"
                  : "products-navbar-item"
              }
            >
              Computadores
            </NavLink>
            <NavLink
              to="electronics"
              className={({ isActive }) =>
                isActive
                  ? "products-navbar-item products-navbar-item-active"
                  : "products-navbar-item"
              }
            >
              Eletrônicos
            </NavLink>
            <NavLink
              to="books"
              className={({ isActive }) =>
                isActive
                  ? "products-navbar-item products-navbar-item-active"
                  : "products-navbar-item"
              }
            >
              Livros
            </NavLink>
          </nav>
        </div>
        <Outlet />
      </section>
    </main>
  );
}
