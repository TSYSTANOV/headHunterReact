import { useSortParams } from "../../hooks/useSortParams";

function SortParams() {
  const {
    openPeriod,
    openOrder,
    openO,
    openP,
    closeO,
    closeP,
    periodData,
    orderData,
    handleChangeSortParams,
  } = useSortParams();

  const handleClick = (e, type) => {
    closeP();
    closeO();
    const name = e.target.textContent;
    const value = e.target.dataset[Object.keys(e.target.dataset)];
    handleChangeSortParams(type, name, value);
  };
  return (
    <div className="option">
      <div className="option__field option__field_order">
        <button className="option__btn option__btn_order" onClick={openO}>
          {orderData.name}
        </button>
        <input type="hidden" id="order_by" name="order_by" value="date" />
        <ul
          className={
            "option__list option__list_order" +
            (openOrder ? " option__list_active" : "")
          }
          onClick={(e) => {
            handleClick(e, "order");
          }}
        >
          <li
            className="option__item option__item_active"
            tabIndex="1"
            data-sort="date"
          >
            По дате
          </li>
          <li className="option__item" tabIndex="1" data-sort="up">
            По убыванию зарплат
          </li>
          <li className="option__item" tabIndex="1" data-sort="down">
            По возрастанию зарплат
          </li>
        </ul>
      </div>

      <div className="option__field option__field_period">
        <button className="option__btn option__btn_period" onClick={openP}>
          {periodData.name}
        </button>
        <input
          type="hidden"
          id="search_period"
          name="search_period"
          value={periodData.value}
        />
        <ul
          onClick={(e) => {
            handleClick(e, "period");
          }}
          className={
            "option__list option__list_period" +
            (openPeriod ? " option__list_active" : "")
          }
        >
          <li className="option__item option__item_active" data-date="365">
            За всё время
          </li>
          <li className="option__item" tabIndex="1" data-date="30">
            За месяц
          </li>
          <li className="option__item" tabIndex="1" data-date="7">
            За неделю
          </li>
          <li className="option__item" tabIndex="1" data-date="3">
            За три дня
          </li>
          <li className="option__item" tabIndex="1" data-date="1">
            За сутки
          </li>
        </ul>
      </div>
    </div>
  );
}
export { SortParams };
