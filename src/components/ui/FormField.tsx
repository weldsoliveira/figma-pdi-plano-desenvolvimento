import React from "react";

interface FormFieldProps {
  label: string;
  value: string;
  className?: string;
  fullWidth?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  className = "",
  fullWidth = false,
}) => {
  return (
    <div className={`min-h-14 ${fullWidth ? "w-full" : "w-fit"} rounded-[4px_4px_0px_0px] ${className}`}>
      <div
        className="rounded border border-[color:var(--M3-sys-light-outline,#707974)] w-full flex-1 border-solid"
      >
        <div
          className="flex w-full flex-1 h-full pl-4 py-1 rounded-[4px_4px_0px_0px]"
        >
          <div
            className="relative flex min-w-60 min-h-12 w-full flex-col justify-center flex-1 shrink basis-[0%] py-3"
          >
            <div
              className="text-[#171D1A] self-stretch z-0 text-base tracking-[0.5px]"
            >
              {value}
            </div>
            <div
              className="text-[#404944] self-stretch absolute z-0 text-xs tracking-[0.4px] leading-none bg-[#F5FBF6] px-1 -left-1 -top-3"
            >
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
