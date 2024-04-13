const PackageCard = ({ packageHeader, imgUrl }) => {
  return (
    <div className="PackageCardContainer">
      <div className="group relative flex h-80 justify-center items-center overflow-hidden rounded-lg bg-gray-100 border border-gray-100 p-4 shadow-lg cursor-pointer    ">
        <img
          src={imgUrl}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className=" bg-gradient-to-r from-[#9e39063a] to-[#f4723152]  pointer-events-none absolute inset-0  via-transparent opacity-15  "></div>

        <div className="relative flex flex-col items-center gap-y-1   ">
          <h1 className=" text-4xl font-medium text-gray-50 ">
            {packageHeader} Packages
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
