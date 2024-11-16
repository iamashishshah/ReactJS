import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";


function Layout() {
  return (
    <div className="bg-slate-700 font-bold text-xl text-center text-white">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;
