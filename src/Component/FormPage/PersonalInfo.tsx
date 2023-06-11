import { FormikContextType, useFormikContext } from "formik";
import { Input } from "../Input/Input";
import { IFormSubmission } from "../../App";

export interface IFormItems {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  inputMode: "text" | "email" | "numeric";
  pattern?: string | undefined;
  onChange?: any;
  value?: any;
  errors?: any;
}

export function PersonalInfo() {
  const formItems: IFormItems[] = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "e.g Stephen King",
      inputMode: "text",
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "e.g stephenking@lorem.com",
      inputMode: "email",
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "text",
      placeholder: "+1 234 567 890",
      inputMode: "numeric",
      pattern: "[0-9]+",
    },
  ];

  const context: FormikContextType<IFormSubmission> =
    useFormikContext<IFormSubmission>();

  return (
    <div className="input-items">
      {formItems.map((formItem) => {
        const valueName = formItem.id;
        return (
          <Input
            key={formItem.id}
            id={formItem.id}
            label={formItem.label}
            type={formItem.type}
            placeholder={formItem.placeholder}
            inputMode={formItem.inputMode}
            pattern={formItem.pattern}
            value={context?.values[valueName as keyof IFormSubmission]}
            onChange={context?.handleChange}
            errors={context.errors[valueName as keyof IFormSubmission]}
          />
        );
      })}
    </div>
  );
}
