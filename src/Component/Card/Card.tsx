import iconAdvance from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";
import iconArcade from "../../assets/icon-arcade.svg";

interface ICardDetail {
  cardIcon: string;
  type: string;
  price: number;
  plan: string;
}

const cardDetails: ICardDetail[] = [
  { cardIcon: iconAdvance, type: "Advance", price: 12, plan: "monthly" },
  { cardIcon: iconAdvance, type: "Advance", price: 120, plan: "yearly" },
  { cardIcon: iconPro, type: "Pro", price: 15, plan: "monthly" },
  { cardIcon: iconPro, type: "Pro", price: 150, plan: "yearly" },
  { cardIcon: iconArcade, type: "Arcade", price: 9, plan: "monthly" },
  { cardIcon: iconArcade, type: "Arcade", price: 90, plan: "yearly" },
];

export function Card() {
  return (
    <div className="cards">
      {cardDetails.map((cardDetail: ICardDetail) => {
        return <div key={cardDetail.price}>CardBody</div>;
      })}
    </div>
  );
}
