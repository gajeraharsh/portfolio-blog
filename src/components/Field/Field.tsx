import React from "react";

function Field({ item, index }: any) {
  if (item.type == "textarea") {
    return (
      <div key={index} className="w-full flex flex-col">
        <div className="p-5 flex flex-col gap-4">
          <h3 className="text-[#77777d]  text-sm">{item.label}</h3>
          <textarea
            className="text-[16px] text-[000] leading-3 py-4 px-5 bg-[#f9f9f9] border border-1 border-[#77777d33] focus:shadow-none focus:bg-[#f9f9f9] focus:border-[#000] outline-none"
            defaultValue={item.value}
            placeholder={item.placeholder}
            name={item.name}
            rows={6}
          ></textarea>
        </div>
      </div>
    );
  }

  return (
    <div key={index} className="w-full flex flex-col">
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-[#77777d]  text-sm">{item.label}</h3>
        <input
          className="text-[16px] text-[000] leading-3 py-4 px-5 bg-[#f9f9f9] border border-1 border-[#77777d33] focus:shadow-none focus:bg-[#f9f9f9] focus:border-[#000] outline-none"
          type={item.type}
          defaultValue={item.value}
          placeholder={item.placeholder}
          name={item.name}

        />
      </div>
    </div>
  );
}

export default Field;
