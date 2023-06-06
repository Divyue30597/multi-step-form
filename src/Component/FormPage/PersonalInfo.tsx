import { Input } from "../Input/Input";

export interface IFormItems {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  inputMode: "text" | "email" | "numeric";
  pattern?: string | undefined;
}

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

export function PersonalInfo() {
  return (
    <div className="input-items">
      {formItems.map((formItem) => {
        return (
          <Input
            key={formItem.id}
            id={formItem.id}
            label={formItem.label}
            type={formItem.type}
            placeholder={formItem.placeholder}
            inputMode={formItem.inputMode}
            pattern={formItem.pattern}
          />
        );
      })}
    </div>
  );
}
