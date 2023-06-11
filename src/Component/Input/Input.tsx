import { IFormItems } from "../FormPage/PersonalInfo";

export function Input({
  id,
  label,
  type,
  placeholder,
  inputMode,
  pattern,
  value,
  onChange,
  errors,
}: IFormItems) {
  return (
    <div className="single-input">
      <div className="label-and-error-handling">
        <label htmlFor={id}>{label}</label>
        <p>{errors}</p>
      </div>
      <input
        inputMode={inputMode}
        id={id}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
