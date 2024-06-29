import { FilterParams } from "../Filter/FilterParams";
import ListOfResults from "../ListOfResults/ListOfResults";
import { ModalVacancy } from "../ModalVacancy/ModalVacancy";
import { SortParams } from "../Sort/SortParams";

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <h1 className="found">
            38 вакансий &laquo;
            <span className="found__item">Junior Frontend</span>
            &raquo;
          </h1>
          <SortParams />
          <div className="wrapper">
            <FilterParams />
            <ListOfResults />
          </div>
        </div>
      </main>
      <ModalVacancy />
    </>
  );
}
export { Main };
