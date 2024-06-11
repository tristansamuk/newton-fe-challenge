import TableRow from "../TableRow/TableRow";
import TableHeader from "../TableHeader/TableHeader";
import tableData from "../../data/table-data.json";
import "./Table.scss";

const tableHeadings = [
  "Coin",
  "24hr change",
  "Live price",
  "Sell price",
  "Buy price",
  "Watch",
];

const Table = () => {
  return (
    <table className="table">
      <TableHeader tableHeadings={tableHeadings} />
      {/* {tableData.map((coin) => {
        return <TableRow />;
      })} */}
    </table>
  );
};

export default Table;
