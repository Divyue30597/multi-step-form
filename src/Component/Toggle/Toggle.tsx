import { FormikContextType, useFormikContext } from "formik";
import { IFormSubmission } from "../../App";

export function Toggle({
  isMonthly,
  setIsMonthly,
}: {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const context: FormikContextType<IFormSubmission> =
    useFormikContext<IFormSubmission>();

  return (
    <div className="toggle-input">
      <label htmlFor="toggle-monthly-plan">
        <input
          type="checkbox"
          id="toggle-monthly-plan"
          onClick={() => setIsMonthly(!isMonthly)}
          value={(context.values.planType = isMonthly.toString())}
        />
        <span />
      </label>
    </div>
  );
}
