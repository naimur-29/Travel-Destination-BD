import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Air Ticket Booking",
    imgUrl:
      "https://i.ibb.co/FsdC1gZ/879361-Sunset-The-sky-The-plane-In-The-Air-Flies-Airliner.jpg",
  },
  {
    title: "Visa Processing",
    imgUrl: "https://i.ibb.co/W6xh20J/pexels-porapak-apichodilok-346798.jpg",
  },
  {
    title: "Umrah Package",
    imgUrl: "https://i.ibb.co/sR4WvWC/pexels-konevi-4346403.jpg",
  },
  {
    title: "Air Ambulance ",
    imgUrl: "https://i.ibb.co/p4syd1q/pexels-mark-soetebier-9965923.jpg",
  },
  {
    title: "Corporate Tour",
    imgUrl: "https://i.ibb.co/YpQ4k38/Corporate-travel-best-practices.jpg",
  },
  {
    title: "Sight Seeing",
    imgUrl: "https://i.ibb.co/NmSq1Th/pexels-jovan-vasiljevi-18471697.jpg",
  },
];

const Service = () => {
  return (
    <div className="servicesContainer bg-sky-50 py-10   ">
      <h1 className=" text-4xl font-semibold mb-14 text-center ">
        <span className=" text-[#f26622] ">Our</span> Services{" "}
      </h1>

      {/* service card starts  */}
      <div className="serviceCardContainer w-[80%] m-auto grid grid-cols-3 gap-x-6 gap-y-8 ">
        {services &&
          services?.map((service, ind) => (
            <ServiceCard key={ind} service={service} />
          ))}
      </div>
      {/* service card ends  */}
    </div>
  );
};

export default Service;
