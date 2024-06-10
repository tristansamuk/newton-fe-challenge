import arrowUp from "../../assets/icons/arrow-up.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import "./InfoCard.scss";

interface Props {
  logo: string;
  logo_alt: string;
  coin: string;
  direction: string;
  change: number;
}

const InfoCard = ({ logo, logo_alt, coin, direction, change }: Props) => {
  return (
    <div className="info-card">
      <img className="info-card__logo" src={logo} alt={logo_alt} />
      <div className="info-card__container-text">
        <h3 className="info-card__text">{coin}</h3>
        <div className="info-card__container-change">
          {direction === "up" ? (
            <img
              src={arrowUp}
              className="info-card__arrow"
              alt="arrow pointing up"
            />
          ) : (
            <img
              src={arrowDown}
              className="info-card__arrow"
              alt="arrow pointing down"
            />
          )}
          <h3
            data-direction={direction}
            className="info-card__change-amount"
          >{`${change}%`}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
