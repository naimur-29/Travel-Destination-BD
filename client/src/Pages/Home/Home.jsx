import "./Home.scss";

import { UseStateContext } from "../../Context/StateContext";
import { UseAuth } from "../../Context/AuthContext";

import homeBgVideo from "../../assets/home-bg.mp4";

const Home = () => {
  const { test } = UseStateContext();
  const { user } = UseAuth();

  console.log(test);
  console.log(user);

  return (
    <section className="home-page-container">
      <div className="bg-video-container">
        <video autoPlay loop muted>
          <source src={homeBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="inner-container">
        <h1 className="title">
          Welcome to <span>Travel Destination!</span>
        </h1>

        <h2 className="subtitle">Find Flights, Hotels, Visa & Holidays</h2>

        <div className="exclusive-offers-container">
          <h3 className="title">Exclusive Offers</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
