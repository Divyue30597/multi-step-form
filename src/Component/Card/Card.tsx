import iconAdvance from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";
import iconArcade from "../../assets/icon-arcade.svg";
import { FormikContextType, useFormikContext } from "formik";
import { IFormSubmission, IPlan } from "../../App";
import { useState } from "react";

interface ICardDetail {
  cardIcon: string;
  type: string;
  price: number;
  plan: string;
  alt: string;
  checked: boolean;
}

const cardDetails: ICardDetail[] = [
  {
    cardIcon: iconAdvance,
    type: "Advance",
    price: 12,
    plan: "monthly",
    alt: "red background with game pad.",
    checked: false,
  },
  {
    cardIcon: iconAdvance,
    type: "Advance",
    price: 120,
    plan: "yearly",
    alt: "red background with game pad.",
    checked: false,
  },
  {
    cardIcon: iconPro,
    type: "Pro",
    price: 15,
    plan: "monthly",
    alt: "blue background with controller.",
    checked: false,
  },
  {
    cardIcon: iconPro,
    type: "Pro",
    price: 150,
    plan: "yearly",
    alt: "blue background with controller.",
    checked: false,
  },
  {
    cardIcon: iconArcade,
    type: "Arcade",
    price: 9,
    plan: "monthly",
    alt: "Orange background with atari type console",
    checked: false,
  },
  {
    cardIcon: iconArcade,
    type: "Arcade",
    price: 90,
    plan: "yearly",
    alt: "Orange background with atari type console",
    checked: false,
  },
];

export function Card({ isMonthly }: { isMonthly: boolean }) {
  return (
    <div className="cards">
      {cardDetails.map((cardDetail: ICardDetail) => {
        {
          return isMonthly && cardDetail.plan === "monthly" ? (
            <CardStyle
              key={cardDetail.price}
              cardDetail={cardDetail}
              isMonthly={isMonthly}
            />
          ) : !isMonthly && cardDetail.plan === "yearly" ? (
            <CardStyle
              key={cardDetail.price}
              cardDetail={cardDetail}
              isMonthly={isMonthly}
            />
          ) : null;
        }
      })}
    </div>
  );
}

function CardStyle({
  cardDetail,
  isMonthly,
}: {
  cardDetail: ICardDetail;
  isMonthly: boolean;
}) {
  const context: FormikContextType<IFormSubmission> =
    useFormikContext<IFormSubmission>();

  const val: IPlan = {
    planInfo: cardDetail.type,
    price: cardDetail.price,
  };

  const [checkedState, setCheckedState] = useState(cardDetail.checked);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      context.values.plan.planInfo = cardDetail.type;
      context.values.plan.price = cardDetail.price;
      setCheckedState(!checkedState);
    } else {
      context.values.plan.planInfo = "";
      context.values.plan.price = 0;
    }
  }

  return (
    <label htmlFor={cardDetail.type.toLowerCase()}>
      <input
        type="radio"
        name={cardDetail.plan.toLowerCase()}
        id={cardDetail.type.toLowerCase()}
        value={JSON.stringify(val)}
        onChange={handleChange}
        checked={checkedState}
      />
      <div className="card-body">
        <picture>
          <img src={cardDetail.cardIcon} alt={cardDetail.alt} />
        </picture>
        <div className="card-body-details">
          <p>{cardDetail.type}</p>
          <p>
            ${cardDetail.price}/{isMonthly ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </label>
  );
}
