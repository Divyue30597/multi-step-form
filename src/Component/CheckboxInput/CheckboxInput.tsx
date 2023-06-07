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
            <MonthlyCheckboxInput
              key={singleCheckboxInputData.service}
              singleCheckboxInputData={singleCheckboxInputData}
            />
          ) : !isMonthly && singleCheckboxInputData.plan === "yearly" ? (
            <YearlyCheckboxInput
              key={singleCheckboxInputData.service}
              singleCheckboxInputData={singleCheckboxInputData}
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

function MonthlyCheckboxInput({
  singleCheckboxInputData,
}: {
  singleCheckboxInputData: ICheckboxInputData;
}) {
  return (
    <label htmlFor={createId(singleCheckboxInputData.service)}>
      <div className="checkbox-input">
        <div className="input-and-label">
          <input
            type="checkbox"
            id={createId(singleCheckboxInputData.service)}
            name="pick-add-ons"
            value="coding"
          />
          <div className="checkbox-input-body">
            <p>{singleCheckboxInputData.service}</p>
            <p>{singleCheckboxInputData.shortDescription}</p>
          </div>
        </div>
        <p>${singleCheckboxInputData.price}/yr</p>
      </div>
    </label>
  );
}

function YearlyCheckboxInput({
  singleCheckboxInputData,
}: {
  singleCheckboxInputData: ICheckboxInputData;
}) {
  return (
    <>
      <label htmlFor={createId(singleCheckboxInputData.service)}>
        <div className="checkbox-input">
          <input
            type="checkbox"
            id={createId(singleCheckboxInputData.service)}
            name="pick-add-ons"
            value="coding"
          />
          <div className="checkbox-input-body">
            <p>{singleCheckboxInputData.service}</p>
            <p>{singleCheckboxInputData.shortDescription}</p>
          </div>
          <p>${singleCheckboxInputData.price}/yr</p>
        </div>
      </label>
    </>
  );
}
