import { Card } from "../Card/Card";
import { Toggle } from "../Toggle/Toggle";

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
        <p className={isMonthly ? "is-Monthly" : ""}>Monthly</p>
        <Toggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        <p className={!isMonthly ? "is-Monthly" : ""}>Yearly</p>
      </div>
    </div>
  );
}
