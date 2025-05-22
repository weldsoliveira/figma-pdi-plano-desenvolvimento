import React from "react";

interface ResultCardProps {
  results: string[];
  height?: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ 
  results,
  height = "120px" 
}) => {
  return (
    <div className="w-full text-[#171D1A] mt-3.5 max-md:max-w-full">
      <div
        className={`relative flex min-h-[${height}] w-full items-stretch rounded-xl max-md:max-w-full`}
      >
        <div
          className="z-0 min-w-60 w-full flex-1 shrink basis-[0%] rounded-xl max-md:max-w-full"
        >
          <div className={`flex min-h-[${height}]`}>
            <div
              className="flex min-w-60 w-full items-center gap-4 flex-1 shrink basis-[0%] p-4 max-md:max-w-full"
            >
              <div
                className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
              >
                <div
                  className="text-[#171D1A] text-base font-medium tracking-[0.15px] max-md:max-w-full"
                >
                  Resultados esperados
                </div>
                <div
                  className="text-[#171D1A] text-sm font-normal leading-5 tracking-[0.25px] mt-1 max-md:max-w-full"
                >
                  {results.map((result, index) => (
                    <React.Fragment key={index}>
                      {result}
                      {index < results.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border border-[color:var(--M3-sys-light-outline-variant,#BFC9C3)] absolute z-0 flex min-w-60 shrink-0 h-[${height}] w-[552px] bg-[#F5FBF6] rounded-xl border-solid inset-0 max-md:max-w-full`}
        />
      </div>
    </div>
  );
};
