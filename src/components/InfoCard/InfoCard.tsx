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
          {/* conditional render up or down icon here */}
          <h3 className="info-card__text">{`${change}%`}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
