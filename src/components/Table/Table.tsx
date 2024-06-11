import TableRow from "../TableRow/TableRow";
import TableHeader from "../TableHeader/TableHeader";
import tableData from "../../data/table-data.json";
import "./Table.scss";

const Table = () => {
  return (
    <div className="table">
      <TableHeader />
      {/* {tableData.map((coin) => {
        return <TableRow />;
      })} */}
    </div>
  );
};

export default Table;
