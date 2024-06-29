import { useModal } from "../../context/ModalApp";
import { useQueryParams } from "../../context/SearchParamsApp";

function HeaderMenu() {
  const { openModal, close } = useModal();
  const { addParamsByRegion } = useQueryParams();

  const handleClick = (e) => {
    if (!e.target.className === "city__link") return;
    e.preventDefault();
    const regionParams = {
      [e.target.getAttribute("href").slice(1)]: e.target.textContent,
    };
    addParamsByRegion(regionParams);
    close();
  };
  return (
    <div className={openModal ? "city city_active" : "city"}>
      <div className="container city__container">
        <button className="city__close" onClick={close}>
          ✕
        </button>
        <form className="city__form">
          <label className="city__label" htmlFor="city__label">
            Укажите город, который требуется найти:
          </label>
          <div className="city__input-wrapper">
            <input
              type="search"
              className="city__input"
              id="city__label"
              placeholder="Поиск по городам"
            />
            <button
              type="submit"
              className="city__search-button"
              onClick={(e) => {
                e.preventDefault();
              }}
            ></button>
          </div>
        </form>

        <div className="city__region" onClick={handleClick}>
          <ul className="city__region-list">
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Россия
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Москва
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Санкт-Петербург
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Владивосток
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Екатеринбург
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Челябинск
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Калининград
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Украина
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Киев
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Днепропетровск
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Донецк
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Львов
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Одесса
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Харьков
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Казахстан
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Нур-Султан
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Актобе
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Алматы
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Павлодар
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Тараз
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Усть-Каменогорск
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Беларусь
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Минск
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Брест
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Витебск
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Гомель
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Гродно
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Могилев
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Узбекистан
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Ташкент
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Азербайджан
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Баку
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Грузия
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Тбилиси
                  </a>
                </li>
              </ul>
            </li>
            <li className="city__region-item">
              <ul className="city__list">
                <li className="city__item">
                  <a className="city__link" href="#country">
                    Кыргызстан
                  </a>
                </li>
                <li className="city__item">
                  <a className="city__link" href="#city">
                    Бишкек
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export { HeaderMenu };
