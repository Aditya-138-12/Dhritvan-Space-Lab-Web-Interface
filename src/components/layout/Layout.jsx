import Header from "./Header";
import Footer from "./Footer";
import StarBackground from "./StarBackground";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-light-space dark:bg-dark-space">
      <StarBackground />
      <Header />
      <main className="pt-16 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
