import React from "react";
import AsideTemplate from "../templates/AsideTemplate";
import PremiumCTA from "./PremiumCTA";
import CashFlowInsight from "./CashFlowInsight";
import SpedingHistoryList from "./SpendingHistoryList";

const Aside: React.FC = () => {
  return (
    <AsideTemplate cta={<PremiumCTA />}>
      <CashFlowInsight />
      <SpedingHistoryList />
    </AsideTemplate>
  );
};

export default Aside;
