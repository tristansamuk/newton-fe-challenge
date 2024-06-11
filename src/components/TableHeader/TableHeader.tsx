import tableHeadings from "../../data/table-headings.json";
import sortIcon from "../../assets/icons/sort-icon.png";
import "./TableHeader.scss";

const headings = tableHeadings[0];

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="table-header__col-1">
        <img className="table-header__icon" src={sortIcon} alt="sort icon" />
        <p className="table-header__col-text">{headings.col_1}</p>
      </div>
      <div className="table-header__col-2">
        <img className="table-header__icon" src={sortIcon} alt="sort icon" />
        <p className="table-header__col-text">{headings.col_2}</p>
      </div>
      <div className="table-header__col-3">
        <img className="table-header__icon" src={sortIcon} alt="sort icon" />
        <p className="table-header__col-text">{headings.col_3}</p>
      </div>
      <div className="table-header__col-4">
        <img className="table-header__icon" src={sortIcon} alt="sort icon" />
        <p className="table-header__col-text">{headings.col_4}</p>
      </div>
      <div className="table-header__col-5">
        <img className="table-header__icon" src={sortIcon} alt="sort icon" />
        <p className="table-header__col-text">{headings.col_5}</p>
      </div>
      <div className="table-header__col-6">
        <img className="table-header__icon" src={sortIcon} alt="sort icon" />
        <p className="table-header__col-text">{headings.col_6}</p>
      </div>
    </div>
  );
};

export default TableHeader;
