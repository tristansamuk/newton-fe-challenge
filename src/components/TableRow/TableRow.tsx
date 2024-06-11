import "./TableRow.scss";

interface Props {
  coin: {
    logo: string;
    coin: string;
    symbol: string;
    fiat_symbol: string;
    operator: string;
    change: number;
    live_price: number;
    sell_price: number;
    buy_price: number;
  };
}

const CAD = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

const TableRow = ({ coin }: Props) => {
  return (
    <tr className="table-row">
      <td className="table-row__cell">
        <div className="table-row__cointainer">
          <img
            className="table-row__logo"
            src={coin.logo}
            alt={`${coin.coin} logo`}
          />
          <div className="table-row__cointainer--text">
            <p className="table-row__data--coin">{coin.coin}</p>
            <p className="table-row__data--symbols">{`${coin.symbol} / ${coin.fiat_symbol}`}</p>
          </div>
        </div>
      </td>
      <td className="table-row__cell">
        <p className="table-row__data">
          {coin.operator}
          {coin.change}
        </p>
      </td>
      <td className="table-row__cell">
        <p className="table-row__data">{CAD.format(coin.live_price)}</p>
      </td>
      <td className="table-row__cell">
        <p className="table-row__data">{CAD.format(coin.sell_price)}</p>
      </td>
      <td className="table-row__cell">
        <p className="table-row__data">{CAD.format(coin.buy_price)}</p>
      </td>
      {/* Star */}
      <td className="table-row__cell">
        <p className="table-row__data"></p>
      </td>
    </tr>
  );
};

export default TableRow;
