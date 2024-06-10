import InfoCard from "./components/InfoCard/InfoCard";
import "./App.scss";
import "./styles/global.scss";
import cardData from "./data/info-cards.json";

function App() {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="hero__container--left">
          <h1 className="hero__heading-1">Welcome to Newton!</h1>
          <h2 className="hero__heading-2">Crypto for Canadians</h2>
        </div>
        <div className="hero__container--right">
          {cardData.map((coin) => {
            return (
              <InfoCard
                key={coin.id}
                logo={coin.logo}
                logo_alt={coin.logo_alt}
                coin={coin.coin}
                direction={coin.direction}
                change={coin.change}
              />
            );
          })}
        </div>
      </section>
      {/* Table componenet here */}
    </div>
  );
}

export default App;
