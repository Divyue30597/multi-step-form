import { CheckboxInput } from "../CheckboxInput/CheckboxInput";

export function SelectAddOns({ isMonthly }: { isMonthly: boolean }) {
  return (
    <div>
      <CheckboxInput isMonthly={isMonthly} />
    </div>
  );
}
