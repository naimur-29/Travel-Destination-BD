/* eslint-disable react/prop-types */
import { useState } from "react";
import { Plane, Hotel, ScrollText, Luggage, TentTree } from "lucide-react";

import "./Home.scss";

import { UseStateContext } from "../../Context/StateContext";
import { UseAuth } from "../../Context/AuthContext";

import homeBgVideo from "../../assets/home-bg.mp4";

const Home = () => {
  // states:
  const [selectedTravelMenu, setSelectedTravelMenu] = useState("Flight");
  const [tourType, setTourType] = useState("One Way");

  const { test } = UseStateContext();
  const { user } = UseAuth();

  console.log(test);
  console.log(user);

  // inner components:
  const FlightMenuItem = ({ context, icon }) => (
    <li
      className={
        selectedTravelMenu === context ? "menu-item active" : "menu-item"
      }
      onClick={() => setSelectedTravelMenu(context)}
    >
      {icon}
      {context}
    </li>
  );

  const TourTypeItem = ({ context }) => (
    <div className="tour-type-item">
      <input
        type="radio"
        name="TripType"
        id={context.split(" ")[0]}
        onChange={() => setTourType(context)}
        checked={tourType === context}
      />
      <label htmlFor={context.split(" ")[0]}>{context}</label>
    </div>
  );

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

        <div className="travel-form-container">
          <ul className="menu-container">
            <FlightMenuItem context="Flight" icon={<Plane />} />
            <FlightMenuItem context="Hotel" icon={<Hotel />} />
            <FlightMenuItem context="Visa" icon={<ScrollText />} />
            <FlightMenuItem context="Holiday Package" icon={<Luggage />} />
            <FlightMenuItem context="Umrah Package" icon={<TentTree />} />
          </ul>

          {selectedTravelMenu !== "Flight" ? (
            <></>
          ) : (
            <div className="tour-type-container">
              <TourTypeItem context="One Way" />
              <TourTypeItem context="Round Trip" />
              <TourTypeItem context="Multi City" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
