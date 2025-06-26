import Navigation from './Navigation';
import styles from './Header.module.css';
import logo from '../../assets/images/common/logo.png';


const Header = () => (
  <header className={styles['header']}>
    <h1>
      <a href='/' className={styles['header__logo']}>
        <img src={logo} alt="Logo" />
      </a>
    </h1>
    <Navigation />
  </header>
);

export default Header;