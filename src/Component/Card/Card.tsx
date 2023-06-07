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
            <CardMonthlyStyle key={cardDetail.price} cardDetail={cardDetail} />
          ) : !isMonthly && cardDetail.plan === "yearly" ? (
            <CardYearlyStyle key={cardDetail.price} cardDetail={cardDetail} />
          ) : null;
        }
      })}
    </div>
  );
}

function CardMonthlyStyle({ cardDetail }: { cardDetail: ICardDetail }) {
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
          <h3>{cardDetail.type}</h3>
          <p>${cardDetail.price}/mo</p>
        </div>
      </div>
    </label>
  );
}

function CardYearlyStyle({ cardDetail }: { cardDetail: ICardDetail }) {
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
          <h3>{cardDetail.type}</h3>
          <p>${cardDetail.price}/mo</p>
        </div>
      </div>
    </label>
  );
}
