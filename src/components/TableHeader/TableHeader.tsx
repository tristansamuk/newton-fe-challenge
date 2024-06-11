import sortIcon from "../../assets/icons/sort-icon.png";
import "./TableHeader.scss";

interface Props {
  tableHeadings: string[];
}

const TableHeader = ({ tableHeadings }: Props) => {
  return (
    <thead>
      <tr className="table-header">
        {tableHeadings.map((heading) => {
          return (
            <th className="table-header__col">
              <img
                className="table-header__icon"
                src={sortIcon}
                alt="sort icon"
              />
              <p className="table-header__col-text">{heading}</p>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
