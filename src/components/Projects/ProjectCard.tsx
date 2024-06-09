import React from "react";

function ProjectCard() {
  return (
    <div className="flex flex-col gap-3 sm:w-[30%] lg:w-[30%]">
      <div className="relative cursor-pointer">
        <img src="https://kane-portfolio-react.vercel.app/assets/work1-eC3ZTYBG.jpeg" />
        <div className="w-full h-full absolute top-0 bg-[#1F1F1F] opacity-0 hover:opacity-40 transition"></div>

      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-[#77777d] text-sm">Design</h1>
        <h1 className="text-xl ">Mobile Application Design</h1>
        <p className="text-[#77777d] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia,
          blanditiis maiores omnis iste repellat repudiandae odio exercitationem
          illo at ullam dolorem eligendi unde nihil, debitis temporibus, tempora
          rerum laudantium.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
