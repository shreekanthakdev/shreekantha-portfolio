// import { Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <main className="mt-1">
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
