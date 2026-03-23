import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-warm-25 text-night-700 transition-colors duration-300 dark:bg-night-950 dark:text-night-200">
      <Header isHomePage={isHomePage} />
      <main className={`flex-1 ${isHomePage ? "" : "pt-19"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
