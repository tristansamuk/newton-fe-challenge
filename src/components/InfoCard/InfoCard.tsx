import arrowUp from "../../assets/icons/arrow-up.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import "./InfoCard.scss";

interface Props {
  coin: {
    logo: string;
    logo_alt: string;
    coin: string;
    direction: string;
    change: number;
  };
}

const InfoCard = ({ coin }: Props) => {
  return (
    <div className="info-card">
      <img className="info-card__logo" src={coin.logo} alt={coin.logo_alt} />
      <div className="info-card__container-text">
        <h3 className="info-card__text">{coin.coin}</h3>
        <div className="info-card__container-change">
          {coin.direction === "up" ? (
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
            data-direction={coin.direction}
            className="info-card__change-amount"
          >{`${coin.change}%`}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
