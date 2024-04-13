import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="ServiceCardContainer">
      <div className="group relative flex h-80 justify-center items-center overflow-hidden rounded-lg bg-gray-100 border border-gray-100 p-4 shadow-lg cursor-pointer    ">
        <img
          src={service?.imgUrl}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className=" bg-[#6438227e]  pointer-events-none absolute inset-0  via-transparent opacity-100  "></div>

        <div className="relative flex flex-col items-center gap-y-1   ">
          <h1 className=" text-3xl font-semibold text-gray-50 ">
            {service?.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
