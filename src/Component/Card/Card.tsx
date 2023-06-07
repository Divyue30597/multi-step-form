import iconAdvance from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";
import iconArcade from "../../assets/icon-arcade.svg";

interface ICardDetail {
  cardIcon: string;
  type: string;
  price: number;
  plan: string;
  alt: string;
}

const cardDetails: ICardDetail[] = [
  {
    cardIcon: iconAdvance,
    type: "Advance",
    price: 12,
    plan: "monthly",
    alt: "red background with game pad.",
  },
  {
    cardIcon: iconAdvance,
    type: "Advance",
    price: 120,
    plan: "yearly",
    alt: "red background with game pad.",
  },
  {
    cardIcon: iconPro,
    type: "Pro",
    price: 15,
    plan: "monthly",
    alt: "blue background with controller.",
  },
  {
    cardIcon: iconPro,
    type: "Pro",
    price: 150,
    plan: "yearly",
    alt: "blue background with controller.",
  },
  {
    cardIcon: iconArcade,
    type: "Arcade",
    price: 9,
    plan: "monthly",
    alt: "Orange background with atari type console",
  },
  {
    cardIcon: iconArcade,
    type: "Arcade",
    price: 90,
    plan: "yearly",
    alt: "Orange background with atari type console",
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
  return (
    <label htmlFor={cardDetail.type.toLowerCase()}>
      <input
        type="radio"
        name="select-your-plan"
        id={cardDetail.type.toLowerCase()}
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
