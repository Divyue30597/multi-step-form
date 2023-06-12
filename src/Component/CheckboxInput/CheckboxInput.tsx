import { FormikContextType, useFormikContext } from "formik";
import { IAddOns, IFormSubmission } from "../../App";

interface ICheckboxInputData {
  service: string;
  shortDescription: string;
  price: number;
  plan: string;
}

const checkboxInputData: ICheckboxInputData[] = [
  {
    service: "Online Service",
    shortDescription: "Access to multiplayer games",
    price: 1,
    plan: "monthly",
  },
  {
    service: "Larger Storage",
    shortDescription: "Extra 1TB of cloud save",
    price: 2,
    plan: "monthly",
  },
  {
    service: "Customizable Profile",
    shortDescription: "Custom theme on your profile",
    price: 2,
    plan: "monthly",
  },
  {
    service: "Online Service",
    shortDescription: "Access to multiplayer games",
    price: 10,
    plan: "yearly",
  },
  {
    service: "Larger Storage",
    shortDescription: "Extra 1TB of cloud save",
    price: 20,
    plan: "yearly",
  },
  {
    service: "Customizable Profile",
    shortDescription: "Custom theme on your profile",
    price: 20,
    plan: "yearly",
  },
];

export function CheckboxInput({ isMonthly }: { isMonthly: boolean }) {
  return (
    <>
      {checkboxInputData.map((singleCheckboxInputData: ICheckboxInputData) => {
        {
          return isMonthly && singleCheckboxInputData.plan === "monthly" ? (
            <SingleCheckboxInput
              key={singleCheckboxInputData.service}
              singleCheckboxInputData={singleCheckboxInputData}
              isMonthly={isMonthly}
            />
          ) : !isMonthly && singleCheckboxInputData.plan === "yearly" ? (
            <SingleCheckboxInput
              key={singleCheckboxInputData.service}
              singleCheckboxInputData={singleCheckboxInputData}
              isMonthly={isMonthly}
            />
          ) : null;
        }
      })}
    </>
  );
}

function createId(id: string) {
  return id.toLowerCase().split(" ").join("-");
}

function SingleCheckboxInput({
  singleCheckboxInputData,
  isMonthly,
}: {
  singleCheckboxInputData: ICheckboxInputData;
  isMonthly: boolean;
}) {
  const context: FormikContextType<IFormSubmission> =
    useFormikContext<IFormSubmission>();

  const val: IAddOns = {
    addOnsInfo: singleCheckboxInputData.service,
    price: singleCheckboxInputData.price,
  };

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    val: IAddOns
  ) {
    if (event.target.checked) {
      context.values.addOns.push(val);
    } else {
      const index = context.values.addOns.indexOf(val);
      if (index > -1) {
        context.values.addOns.splice(index, 1);
      }
    }
  }

  return (
    <label
      className="checkbox-input"
      htmlFor={createId(singleCheckboxInputData.service)}
    >
      <div className="input-and-label">
        <input
          type="checkbox"
          id={createId(singleCheckboxInputData.service)}
          name={singleCheckboxInputData.service}
          value={JSON.stringify(val)}
          onChange={(event) => handleChange(event, val)}
        />
        <div className="checkbox-input-body">
          <p>{singleCheckboxInputData.service}</p>
          <p>{singleCheckboxInputData.shortDescription}</p>
        </div>
      </div>
      <p>
        ${singleCheckboxInputData.price}/{isMonthly ? "mo" : "yr"}
      </p>
    </label>
  );
}
