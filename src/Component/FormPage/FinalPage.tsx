import { FormikContextType, useFormikContext } from "formik";
import { IFormSubmission } from "../../App";

export function FinalPage() {
  const context: FormikContextType<IFormSubmission> =
    useFormikContext<IFormSubmission>();

  let totalAddon: number = 0;

  for (let i = 0; i < context.values.addOns.length; i++) {
    totalAddon += context.values.addOns[i].price;
  }

  const totalPrice = context.values.plan.price + totalAddon;

  return (
    <>
      <div className="final-page">
        <div className="final-page-heading">
          <div className="final-page-heading-elements">
            <h3>
              {context.values.plan.planInfo} (
              {context.values.planType === "true" ? "Monthly" : "Yearly"})
            </h3>
            <a href="#">Change</a>
          </div>

          <p>
            ${context.values.plan.price}/
            {context.values.planType === "true" ? "mo" : "yr"}
          </p>
        </div>
        <hr />
        <div className="final-page-body">
          <div className="final-page-body-items">
            {context.values.addOns.map((addOn) => {
              return (
                <div key={addOn.addOnsInfo} className="final-page-body-item">
                  <p>{addOn.addOnsInfo}</p>
                  <p>
                    +${addOn.price}/
                    {context.values.planType === "true" ? "mo" : "yr"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="final-page-footer">
        <p>
          Total (per
          {context.values.planType === "true" ? " month" : " year"})
        </p>
        <p>
          ${totalPrice}/{context.values.planType === "true" ? "mo" : "yr"}
        </p>
      </div>
    </>
  );
}
