/* eslint-disable react/prop-types */
import { useState } from "react";
import { Plane, Hotel, ScrollText, Luggage, TentTree } from "lucide-react";

import "./Home.scss";

import TravelMenuFlight from "../../Components/TravelMenuFlight/TravelMenuFlight";

import homeBgVideo from "../../assets/home-bg.mp4";
import PackageCard from "../../Components/PackagesComponent/PackageCard";

const Home = () => {
  // states:
  const [selectedTravelMenu, setSelectedTravelMenu] = useState("Flight");

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

  return (
    <div className="homePageWraper">
      <section className="home-page-container   ">
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

            {selectedTravelMenu !== "Flight" ? <></> : <TravelMenuFlight />}
          </div>
        </div>
      </section>

      {/* package section starts  */}
      <div className="packages  py-8 w-[80%] m-auto   ">
        <h1 className=" text-4xl text-center font-semibold mb-10 ">
          <span className=" text-[#f26622] ">Our</span> Packages{" "}
        </h1>

        <div className="packageCardContainer  grid grid-cols-2 gap-x-12 ">
          {/* card starts  */}
          <PackageCard
            packageHeader={"Domestic"}
            imgUrl="https://i.ibb.co/zryT971/pexels-rushow-khan-122107.jpg"
          />
          <PackageCard
            packageHeader={"International"}
            imgUrl="https://i.ibb.co/rwSSsqB/pexels-nextvoyage-1470502.jpg"
          />
          {/* card ends  */}
        </div>
      </div>
      {/* package section ends  */}
    </div>
  );
};

export default Home;
