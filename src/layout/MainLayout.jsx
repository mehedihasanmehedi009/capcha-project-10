import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
 

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen ">
        <NavBar />
      
        <div className="mt-4 flex-1 ">
          <Outlet />
        </div>
        <Footer />
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;
 