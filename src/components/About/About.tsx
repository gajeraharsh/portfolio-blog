import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const socialIcons = [
  {
    href: "#",
    icon: <FaFacebook className="text-[25px] text-[#77777D]" />,
  },
  {
    href: "#",
    icon: <FaXTwitter className="text-[25px] text-[#77777D]" />,
  },
  {
    href: "#",
    icon: <FiInstagram className="text-[25px] text-[#77777D]" />,
  },
  {
    href: "#",
    icon: <FaGithub className="text-[25px] text-[#77777D]" />,
  },
];

const skills = [
  {
    label: "Logo Design",
  },
  {
    label: "Social Marketing",
  },
  {
    label: "Branding Identity",
  },
  {
    label: "Digital Marketing",
  },
  {
    label: "Web Design",
  },
  {
    label: "Product Design",
  },
];

function About() {
  return (
    <section className="w-full flex justify-center mt-24">
      <div className=" w-[90%] lg:w-[65%] flex  flex-col lg:flex-row">
        <div className="text-center p-10 border border-black/5 rounded-lg">
          <img
            src="https://kane-portfolio-react.vercel.app/assets/profile-B9KxBwnD.jpg"
            alt="about image"
            width={441}
            height={441}
          />

          <h2 className="mt-[30px] text-[30px]">Kane Walker</h2>
          <div className="inline-flex text-white border border-[#ededee] px-5 pt-3.5 pb-2.5 rounded-full">
            <h6 className="font-normal text-[#77777d] mb-0 mr-4 mt-[-5px]">
              Available for Work
            </h6>
            <div className="active-animation"></div>
          </div>
          <div className="mt-[15px] text-center">
            <ul>
              {socialIcons.map((item: any, index: any) => (
                <li className="inline-block mx-3.5" key={index}>
                  <a href={item.href}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-10 py-10 w-[100%] lg:w-[60%]">
          <div style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl lg:text-5xl leading-16 mb-5">
              Hello, I’m Kane Walker, <span>Framer Developer</span> and UX / UI
              Designer Based in California.
            </h2>
            <div className="mt-[30px]">
              <a href="#" className="theme_btn">
                Download CV
                <i>
                  <MdOutlineFileDownload className="text-white ml-5 text-[20px]" />
                </i>
              </a>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }} className="mt-16">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {skills.map((item: any, index: any) => (
                <li className=" w-1/1 lg:w-1/2 text-gray-600 text-base flex items-center">
                  <i className="pr-[10px]">
                    <FiArrowUpRight />
                  </i>{" "}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
