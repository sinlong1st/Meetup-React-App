import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups Organizer</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
