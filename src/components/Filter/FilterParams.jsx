import { useState } from "react";
import { useFilterParams } from "../../hooks/useFilterParams";

function FilterParams() {
  const { filterParams, resetFilterParams, handleChange } = useFilterParams();
  return (
    <div className="wrapper__filter filter">
      <form className="filter__form" onChange={handleChange}>
        <fieldset className="filter__box">
          <legend className="filter__title">Уровень дохода</legend>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="30000"
              checked={filterParams.salary === "30000"}
            />
            <span className="filter__text">от 30 000 руб.</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="50000"
              checked={filterParams.salary === "50000"}
            />
            <span className="filter__text">от 50 000 руб.</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="80000"
              checked={filterParams.salary === "80000"}
            />
            <span className="filter__text">от 80 000 руб.</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="salary"
              value="120000"
              checked={filterParams.salary === "120000"}
            />
            <span className="filter__text">от 120 000 руб.</span>
          </label>
        </fieldset>

        <fieldset className="filter__box">
          <legend className="filter__title">Опыт работы</legend>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="Нет опыта"
              checked={filterParams.experience === "Нет опыта"}
            />
            <span className="filter__text">Нет опыта</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="от 1 года до 3 лет"
            />
            <span className="filter__text">от 1 года до 3 лет</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="от 3 до 6 лет"
              checked={filterParams.experience === "от 3 до 6 лет"}
            />
            <span className="filter__text">от 3 до 6 лет</span>
          </label>
          <label className="filter__field filter__field_radio">
            <input
              className="filter__input filter__input_radio"
              type="radio"
              name="experience"
              value="более 6 лет"
              checked={filterParams.experience === "более 6 лет"}
            />
            <span className="filter__text">более 6 лет</span>
          </label>
        </fieldset>

        <fieldset className="filter__box">
          <legend className="filter__title">График работы</legend>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="employment"
              value="удаленная работа"
              checked={filterParams.employment.includes("удаленная работа")}
            />
            <span className="filter__text">Удаленная работа</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="employment"
              value="полная занятость"
              checked={filterParams.employment.includes("полная занятость")}
            />
            <span className="filter__text">Полная занятость</span>
          </label>
          <label className="filter__field filter__field_checkbox">
            <input
              className="filter__input filter__input_checkbox"
              type="checkbox"
              name="employment"
              value="гибкий график"
              checked={filterParams.employment.includes("гибкий график")}
            />
            <span className="filter__text">Гибкий график</span>
          </label>
        </fieldset>

        <div className="filter__mobile">
          <button className="filter__reset" onClick={resetFilterParams}>
            Сбросить все
          </button>
          <button className="filter__apply">Применить фильтры</button>
        </div>
      </form>
    </div>
  );
}
export { FilterParams };
