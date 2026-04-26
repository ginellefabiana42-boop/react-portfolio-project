import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link className={styles.navLink} to="/">{'< System.Init />'}</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link className={styles.navLink} to="/">[ Home ]</Link></li>
        <li><Link className={styles.navLink} to="/about">[ About ]</Link></li>
        <li><Link className={styles.navLink} to="/projects">[ Projects ]</Link></li>
        <li><Link className={styles.navLink} to="/contact">[ Contact ]</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;