import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="shadow-[0px_8px_10px_0px_rgba(0,0,0,0.14),0px_3px_14px_0px_rgba(0,0,0,0.12),0px_5px_5px_0px_rgba(0,0,0,0.20)] flex w-full text-xs text-white font-normal text-center tracking-[0.4px] leading-none flex-wrap bg-[#186B53] mt-8 max-md:max-w-full">
      <div className="flex min-w-60 flex-col items-center text-white justify-center flex-1 shrink basis-[0%] bg-[#186B53] px-20 py-2 max-md:max-w-full max-md:px-5">
        <div className="flex w-[151px] max-w-full flex-col items-stretch">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fba52eb12d7f470580e3cf54f579e591/a5e7e5a5f923a16e337973b1eb0b5cc1dd9fc746?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-center"
            alt="Development plan icon"
          />
          <div className="text-white">
            Plano de Desenvolvimento
          </div>
        </div>
      </div>
      <div className="flex min-w-60 flex-col items-center whitespace-nowrap justify-center flex-1 shrink basis-[0%] bg-[#186B53] px-20 py-2 max-md:max-w-full max-md:px-5">
        <div className="flex w-[75px] flex-col items-stretch">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fba52eb12d7f470580e3cf54f579e591/363985a7cf6972ab2acf194fea53435cff553620?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 bg-blend-normal self-center"
            alt="Performance icon"
          />
          <div>Desempenho</div>
        </div>
      </div>
      <div className="flex min-w-60 flex-col items-center whitespace-nowrap justify-center flex-1 shrink basis-[0%] bg-[#186B53] px-20 py-2 max-md:max-w-full max-md:px-5">
        <div className="flex w-[55px] flex-col items-stretch">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fba52eb12d7f470580e3cf54f579e591/7c280f1f4a40c789f46b39b9a42e56779f3c9fed?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 bg-blend-normal self-center"
            alt="Feedback icon"
          />
          <div>Feedback</div>
        </div>
      </div>
    </footer>
  );
};
