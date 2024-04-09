import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";

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
      <div className="footerContainer">
        <h1>footer</h1>
      </div>
      {/* footer container ends  */}
    </div>
  );
};

export default RootPage;
