import { FilterParams } from "../Filter/FilterParams";
import ListOfResults from "../ListOfResults/ListOfResults";
import { ModalVacancy } from "../ModalVacancy/ModalVacancy";
import { FoundInfo } from "../Search/FoundInfo";
import { SortParams } from "../Sort/SortParams";

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <FoundInfo />
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
