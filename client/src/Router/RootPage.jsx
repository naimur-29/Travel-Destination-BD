import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const RootPage = () => {
  return (
    <div className="RootPageContainer">
      {/* nav container  */}
      <Navbar />
      {/* nav container ends  */}

      {/* children components starts  */}
      <div className="childComponents">
        <Outlet />
      </div>
      {/* children components ends  */}

      {/* footer container starts  */}
      <Footer />
      {/* footer container ends  */}
    </div>
  );
};

export default RootPage;
