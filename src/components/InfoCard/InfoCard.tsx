import "./InfoCard.scss";

interface Props {
  key: number;
  logo: string;
  logo_alt: string;
  coin: string;
  direction: string;
  change: number;
}

const InfoCard = ({ key, logo, logo_alt, coin, direction, change }: Props) => {
  return (
    <div key={key} className="info-card">
      <img className="info-card__logo" src={logo} alt={logo_alt} />
      <h3 className="info-card__coin-title">{coin}</h3>
      <div className="info-card__container">
        {/* conditional render up or down icon here */}
        <h3 className="info-card__coin-title">{`${change}%`}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
