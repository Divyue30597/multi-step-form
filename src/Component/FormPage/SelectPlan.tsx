import { Card } from "../Card/Card";

export function SelectPlan({
  isMonthly,
  setIsMonthly,
}: {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
