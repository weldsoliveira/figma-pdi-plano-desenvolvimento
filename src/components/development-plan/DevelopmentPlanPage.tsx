import React from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { ActionPlanSection } from "./ActionPlanSection";

export const DevelopmentPlanPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.3)] self-center flex w-[600px] max-w-full flex-col items-stretch px-6 py-[23px] max-md:px-5">
        <PersonalInfoSection />
        <ActionPlanSection />
      </main>
      
      <Footer />
    </div>
  );
};
