import React from "react";
import { FormField } from "../ui/FormField";

export const PersonalInfoSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-[#1F6A4E] text-[28px] font-medium leading-[52px]">
        Plano de desenvolvimento
      </h2>
      
      <FormField 
        label="Nome completo" 
        value="Paulo Levi Breno Carvalho" 
        className="mt-2.5" 
        fullWidth 
      />
      
      <div className="flex items-stretch gap-6 font-normal flex-wrap mt-[18px]">
        <FormField 
          label="Matrícula" 
          value="20167266" 
          className="flex-1 grow shrink-0 basis-0 w-fit" 
        />
        <FormField 
          label="Cargo" 
          value="Auxiliar Administrativo" 
          className="flex-1 grow shrink-0 basis-0 w-fit" 
        />
      </div>
      
      <div className="flex items-stretch gap-6 font-normal flex-wrap mt-4 max-md:max-w-full">
        <FormField 
          label="Data admissão" 
          value="14/11/2021" 
          className="flex-1 grow shrink-0 basis-0 w-fit" 
        />
        <FormField 
          label="Departamento" 
          value="Financeiro" 
          className="flex-1 grow shrink-0 basis-0 w-fit" 
        />
      </div>
      
      <div className="flex items-stretch gap-6 font-normal flex-wrap mt-4 max-md:max-w-full">
        <FormField 
          label="Gestor imediato" 
          value="Yago Alexandre Hugo Moraes" 
          className="flex-1 grow shrink-0 basis-0 w-fit" 
        />
        <FormField 
          label="Data da avaliação" 
          value="19/12/2024" 
          className="flex-1 grow shrink-0 basis-0 w-fit" 
        />
      </div>
    </section>
  );
};
