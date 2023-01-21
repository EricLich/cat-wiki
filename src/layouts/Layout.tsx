import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-full max-w-smMaxW lg:max-w-lgMaxWidth mx-auto font-mont lg:px-5">
      <Header />
      <main className="min-h-[75vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
