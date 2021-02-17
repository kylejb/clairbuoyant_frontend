import { NavLink } from 'react-router-dom';
import NavigationBarRouter from './navbar.routes';

const NavigationBar = () => {

  return (
    <>
      <h1>NavigationBar Component</h1>
      <nav>
        <NavLink
          className="nav-link"
          to="/">
          <h2>{" Home "}</h2>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/favorites">
          <h2>{" Favorites "}</h2>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/search">
          <h2>{" Search "}</h2>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/map">
          <h2>{" Map "}</h2>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/social">
          <h2>{" Social "}</h2>
        </NavLink>
        <NavLink
          className="nav-link"
          to="/login">
          <h2>{" Login / Profile "}</h2>
        </NavLink>
      </nav>

      <NavigationBarRouter />
    </>
  );
};

export default NavigationBar;
