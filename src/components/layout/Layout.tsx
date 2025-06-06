import Header from '../layout/Header';
import Footer from '../layout/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="l-page">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;