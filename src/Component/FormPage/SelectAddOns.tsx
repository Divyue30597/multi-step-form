import { CheckboxInput } from "../CheckboxInput/CheckboxInput";

export function SelectAddOns({ isMonthly }: { isMonthly: boolean }) {
  return <CheckboxInput isMonthly={isMonthly} />;
}
