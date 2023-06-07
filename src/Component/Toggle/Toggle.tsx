export function Toggle({
  isMonthly,
  setIsMonthly,
}: {
  isMonthly: boolean;
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="toggle-input">
      <label htmlFor="toggle-monthly-plan">
        <input
          type="checkbox"
          name=""
          id="toggle-monthly-plan"
          onClick={() => setIsMonthly(!isMonthly)}
        />
        <span />
      </label>
    </div>
  );
}
