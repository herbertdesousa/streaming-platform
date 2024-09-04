import { useLocation, Link } from "react-router-dom";
import "./Nav.css";

export function Nav() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isAbout = pathname === "/sobre";
  const isContact = pathname === "/contato";

  return (
    <nav>
      <span className={isHome ? "active" : ""}>
        <Link to="/">Home</Link>
      </span>
      <span className={isAbout ? "active" : ""}>
        <Link to="/sobre">Sobre</Link>
      </span>
      <span className={isContact ? "active" : ""}>
        <Link to="/contato">Contato</Link>
      </span>
    </nav>
  );
}
