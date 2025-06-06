import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles['navigation']}>
    <Link to="/" className={styles['navigation__link']}>Home</Link>
    <Link to="/about" className={styles['navigation__link']}>About</Link>
    <Link to="/hoge" className={styles['navigation__link']}>Hoge</Link>
    <Link to="/contact" className={styles['navigation__link']}>Contact</Link>
  </nav>
);

export default Navigation;