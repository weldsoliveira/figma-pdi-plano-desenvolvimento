import React from "react";
import { ActionPlanItem } from "./ActionPlanItem";

export const ActionPlanSection: React.FC = () => {
  const actionPlans = [
    {
      action: "Participar de um workshop de liderança e gestão de equipes.",
      deadline: "31/03/2025",
      results: [
        "Melhoria na comunicação com a equipe.",
        "Implementação de reuniões semanais de feedback, aumentando a satisfação da equipe em 15% (medido por pesquisa interna)."
      ]
    },
    {
      action: "Realizar um curso sobre controle de qualidade e regulamentações na indústria de cosméticos.",
      deadline: "30/06/2025",
      results: [
        "Redução de 20% nas não conformidades em auditorias internas.",
        "Criação de um manual de boas práticas que será utilizado pela equipe."
      ]
    },
    {
      action: "Participar de um programa de desenvolvimento pessoal focado em habilidades interpessoais (ex: comunicação, trabalho em equipe).",
      deadline: "30/09/2025",
      results: [
        "Melhoria nas relações interpessoais, com feedback positivo de pelo menos 80% dos colegas.",
        "Aumento da colaboração em projetos interdepartamentais."
      ]
    },
    {
      action: "Liderar um projeto de melhoria contínua em um processo específico da linha de produção.",
      deadline: "31/12/2025",
      results: [
        "Identificação e implementação de pelo menos 2 melhorias que resultem em uma redução de custos de 15%.",
        "Apresentação dos resultados em uma reunião da equipe, promovendo a cultura de melhoria contínua."
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-[#1F6A4E] text-[28px] font-medium leading-[52px] mt-9">
        Ações, prazos e resultados esperados
      </h2>
      <div className="mt-[9px]">
        {actionPlans.map((plan, index) => (
          <ActionPlanItem
            key={index}
            action={plan.action}
            deadline={plan.deadline}
            results={plan.results}
            isLast={index === actionPlans.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
