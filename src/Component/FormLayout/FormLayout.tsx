import { PersonalInfo } from "../FormPage/PersonalInfo";
import { FinalPage } from "../FormPage/FinalPage";
import { SelectAddOns } from "../FormPage/SelectAddOns";
import { SelectPlan } from "../FormPage/SelectPlan";

interface IFormHeading {
  heading: string;
  shortDescription: string;
}

const formHeading: IFormHeading[] = [
  {
    heading: "Personal Info",
    shortDescription:
      "Please provide your name, email address and phone number.",
  },
  {
    heading: "Select your plan",
    shortDescription: "You have the option for monthly or yearly billing.",
  },
  {
    heading: "Pick add-ons",
    shortDescription: "Add-ons help enhance your gaming experience.",
  },
  {
    heading: "Finishing up",
    shortDescription: "Double-check everything looks OK before confirming.",
  },
];

function formComponent(activeIndex: number) {
  switch (activeIndex) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <SelectPlan />;
    case 2:
      return <SelectAddOns />;
    case 3:
      return <FinalPage />;
  }
}

export function FormLayout({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="form-headers">
      <h1>{formHeading[activeIndex].heading}</h1>
      <p>{formHeading[activeIndex].shortDescription}</p>
      <div className="form-body">{formComponent(activeIndex)}</div>
    </div>
  );
}
