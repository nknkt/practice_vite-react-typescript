import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles['header']}>
    <h1>
      <a href='/' className={styles['header__logo']}>Logo</a>
    </h1>
    <Navigation />
  </header>
);

export default Header;