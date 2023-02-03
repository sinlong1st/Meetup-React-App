import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Link to</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tainguyen2202/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sinlong1st/Meetup-React-App"
              target="_blank"
            >
              Source Sample
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Footer;
