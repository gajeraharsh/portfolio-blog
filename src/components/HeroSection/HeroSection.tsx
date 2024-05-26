import React from "react";

function HeroSection() {
  return (
    <section className="w-full mt-20 lg:mt-[125px] flex justify-center">
      <div className=" w-[90%] lg:w-[65%] bg-[#E6EAEE] rounded-[15px] lg:p-[50px] lg:px-[25px] border border-[#EDEDEE]">
        <div className="p-[100px] px-[50px] text-center">
          <h1 className="font-medium leading-[68px] my-[10px] text-[40px] lg:text-[80px] uppercase">
            I'm <span className="text-transparent text-stroke">HARSH</span>{" "}
            Gajera
          </h1>
          <div className="inline-block bg-[#f5f5f5] p-[12px] px-[30px] lg:p-[15px] lg:px-[40px] mt-[10px] hero-breadcrumbs">
            <span>UI Designer</span>
            <span>Webflow Developer</span>
            <span>Marketer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
