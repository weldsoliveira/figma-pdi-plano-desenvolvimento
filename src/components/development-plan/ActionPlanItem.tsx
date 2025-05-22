import React from "react";
import { ActionItem } from "./ActionItem";
import { ResultCard } from "./ResultCard";

interface ActionPlanItemProps {
  action: string;
  deadline: string;
  results: string[];
  isLast?: boolean;
}

export const ActionPlanItem: React.FC<ActionPlanItemProps> = ({
  action,
  deadline,
  results,
  isLast = false,
}) => {
  return (
    <>
      <ActionItem action={action} deadline={deadline} />
      <ResultCard results={results} />
      {!isLast && (
        <div
          className="border bg-[#BFC9C3] min-h-px w-full mt-3.5 border-[rgba(191,201,195,1)] border-solid max-md:max-w-full"
        />
      )}
    </>
  );
};
