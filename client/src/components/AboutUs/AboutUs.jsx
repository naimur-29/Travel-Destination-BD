import React from "react";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer py-10 ">
      <div className="AboutUsWraper w-[80%] m-auto   ">
        <h1 className=" text-4xl font-semibold mb-14 text-center ">
          <span className=" text-[#f26622] ">About</span> Us
        </h1>

        {/*  */}

        {/* about card starts  */}
        <div className="aboutCard  flex justify-between items-center gap-x-6  ">
          {/* about card left image section starts  */}
          <div className=" w-[44%] aboutLeft   h-[21rem] rounded-md overflow-auto ">
            <img
              src={"https://i.ibb.co/8XfHRW1/about.jpg"}
              loading="lazy"
              className=" inset-0 h-full w-full object-cover object-center "
            />
          </div>
          {/* about card left image section ends  */}

          {/* about right section starts  */}
          <div className=" w-[56%] aboutRight  flex flex-col gap-y-6  ">
            <h1>
              At Travel Destination BD, we craft bespoke luxury journeys
              tailored to your interests and schedule. With over 20 years of
              experience, our passionate specialists ensure unique experiences
              that surpass expectations. Let us guide you to inspiring
              destinations with expert guides and personalized itineraries,
              providing both adventure and relaxation.
            </h1>

            <h1>
              we prioritize your happiness and comfort. With dedicated staff
              worldwide, we ensure seamless and authentic experiences from start
              to finish. From planning to post-trip support, we exceed your
              expectations every step of the way.
            </h1>

            <h1>
              Travel Destination BD extensive global network of insiders and
              experts allows us to create the trip you’ve been dreaming about.
              We have more knowledge, relationships, and expertise than anyone
              in the industry, and we use it create one-of-a-kind journeys and
              experiences that you will cherish for a lifetime
            </h1>

            {/*  */}
          </div>
          {/* about right section ends  */}
        </div>
        {/* about card ends  */}
      </div>
    </div>
  );
};

export default AboutUs;
