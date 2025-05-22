import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-stretch gap-5 flex-wrap justify-between bg-[#186B53] p-4 max-md:max-w-full">
      <div className="flex items-stretch gap-[31px] text-xl text-white font-medium tracking-[0.15px] leading-[1.2]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fba52eb12d7f470580e3cf54f579e591/da992e8b2567c0409538223d9d82e8e671232600?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Menu icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fba52eb12d7f470580e3cf54f579e591/333854f5c8d04145f7045b6ac4f336ed062c4b26?placeholderIfAbsent=true"
          className="aspect-[3.8] object-contain w-[76px] shrink-0 my-auto"
          alt="Logo"
        />
        <div className="text-white basis-auto">
          Paulo Levi Breno Carvalho
        </div>
      </div>
      <div className="flex gap-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fba52eb12d7f470580e3cf54f579e591/3a3c3b3e6ae8cce298e9924b4655521302dbfa68?placeholderIfAbsent=true"
          className="aspect-[0.96] object-contain w-[23px]"
          alt="Notification icon"
        />
      </div>
    </header>
  );
};
