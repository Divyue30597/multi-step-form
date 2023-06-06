import { IFormItems } from "../FormPage/PersonalInfo";

export function Input({
  id,
  label,
  type,
  placeholder,
  inputMode,
  pattern,
}: IFormItems) {
  return (
    <div className="single-input">
      <label htmlFor={id}>{label}</label>
      <input
        inputMode={inputMode}
        id={id}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
}
