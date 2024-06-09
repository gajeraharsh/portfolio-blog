import React from "react";
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import Field from "../Field/Field";

export const CONTACT_DATA = [
  {
    icon: <LuMapPin className="text-[20px]" />,
    title: "Our Office: ",
    value: "Jurain,Dhaka Bangladesh",
  },
  {
    icon: <BsTelephone className="text-[20px]" />,
    title: "Contact Number:",
    value: "+1234321321",
  },

  {
    icon: <CgMail className="text-[20px]" />,
    title: "Email Us:",
    value: "websitename@mail.com",
  },
];

export const FIELDS = [
  {
    id: "full-name",
    type: "text",
    value: "",
    placeholder: "Steve Milner",
    name: "fullname",
    label: "Full Name",
  },
  {
    id: "email",
    value: "",
    placeholder: "xyz@gmail.com",
    name: "email",
    type: "email",
    label: "Email Address",
  },
  {
    id: "message",
    value: "",
    placeholder: "Write you message",
    name: "message",
    type: "textarea",
    label: "Enter Message",
  },
];

function Contact() {
  return (
    <section className="w-full flex justify-center pb-10 ">
      <div className=" w-[90%] sm:w-[65%] lg:w-[75%]">
        <div className="flex flex-col gap-1 py-10">
          <h1 className="text-center text-sm text-[#77777d] ">CONTACT</h1>
          <h1 className="text-center text-3xl">Get In Touch With Me!</h1>
        </div>

        <div className="w-full flex flex-col gap-3 lg:flex-row">
          <div className="w-full rounded-lg bg-[#E6EAEE] mt-5 lg:w-1/2 ">
            <div className="px-12 py-16 flex flex-col gap-10">
              {CONTACT_DATA.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  {item.icon}
                  <h3 className="text-base">{item.title}</h3>
                  <h3 className="text-[#77777d] text-sm">{item.value}</h3>
                </div>
              ))}
            </div>
          </div>
          <form className="w-full ">
            {FIELDS.map((item, index) => {
              return <Field item={item} index={index} />;
            })}
            <div className="pl-5">
              <button type="submit" className="theme_btn">
                Send Me Messager
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
