import InfoCard from "./components/InfoCard/InfoCard";
import Button from "./components/Button/Button";
import Table from "./components/Table/Table";
import cardData from "./data/info-cards.json";
import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="hero__container--left">
          <h1 className="hero__heading-1">Welcome to Newton!</h1>
          <h2 className="hero__heading-2">Crypto for Canadians</h2>
          <Button text="SIGN UP" className="button-large" />
        </div>
        <div className="hero__container--right">
          {cardData.map((coin) => {
            return <InfoCard key={coin.id} coin={coin} />;
          })}
        </div>
      </section>
      <Table />
    </div>
  );
}

export default App;
