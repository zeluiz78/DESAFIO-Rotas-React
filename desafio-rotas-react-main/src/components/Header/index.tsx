import { Link, NavLink } from "react-router-dom";
import homeIcon from "../../assets/imgs/home-icon.svg";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="header-ctr container">
        <nav className="navbar">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            Sobre nós
          </NavLink>
        </nav>
        <Link to="/">
          <img src={homeIcon} alt="Página inicial" />
        </Link>
      </div>
    </header>
  );
}
