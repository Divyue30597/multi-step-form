import { useState } from "react";
import { Card } from "../Card/Card";

export function SelectPlan() {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  return (
    <div className="select-plan">
      <Card isMonthly={isMonthly} />
      <div className="select-plan-toggle">
        <span>Monthly</span>
        <span>Yearly</span>
      </div>
    </div>
  );
}
