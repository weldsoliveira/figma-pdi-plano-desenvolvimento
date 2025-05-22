import React from "react";

interface ActionItemProps {
  action: string;
  deadline: string;
}

export const ActionItem: React.FC<ActionItemProps> = ({ action, deadline }) => {
  return (
    <div className="w-full" space={14}>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-9/12 max-md:w-full max-md:ml-0">
          <div className="relative flex min-h-28 grow items-stretch text-[#171D1A] rounded-xl max-md:mt-3.5">
            <div className="z-0 min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
              <div className="flex min-h-28 items-stretch">
                <div className="flex min-w-60 w-full gap-4 h-full flex-1 shrink basis-[0%] p-4">
                  <div className="min-w-60 w-full flex-1 shrink basis-[0%]">
                    <div className="text-[#171D1A] text-base font-medium tracking-[0.15px]">
                      Ações propostas
                    </div>
                    <div className="text-[#171D1A] text-sm font-normal leading-5 tracking-[0.25px] mt-1">
                      {action}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[color:var(--M3-sys-light-outline-variant,#BFC9C3)] absolute z-0 flex min-w-60 shrink-0 h-28 w-[401px] bg-[#F5FBF6] rounded-xl border-solid inset-0" />
          </div>
        </div>
        <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="relative flex min-h-28 grow items-stretch text-[#171D1A] whitespace-nowrap rounded-xl max-md:mt-3.5">
            <div className="z-0 w-full overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
              <div className="flex min-h-28 items-stretch">
                <div className="flex w-full gap-4 h-full flex-1 shrink basis-[0%] p-4">
                  <div className="w-full flex-1 shrink basis-[0%]">
                    <div className="text-[#171D1A] text-base font-medium tracking-[0.15px]">
                      Prazo
                    </div>
                    <div className="text-[#171D1A] text-sm font-normal leading-none tracking-[0.25px] mt-1">
                      {deadline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[color:var(--M3-sys-light-outline-variant,#BFC9C3)] absolute z-0 flex shrink-0 h-28 w-[137px] bg-[#F5FBF6] rounded-xl border-solid inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
