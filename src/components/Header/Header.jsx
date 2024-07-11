import { useModal } from "../../context/ModalApp";
import { useQueryParams } from "../../context/SearchParamsApp";
import { Search } from "../Search/Search";

function Header() {
  const { params } = useQueryParams();
  const { open } = useModal();
  return (
    <header className="header">
      <div className="header__top top">
        <div className="container">
          <div className="header__container top__container">
            <div className="header__left">
              <button className="top__city btn-dotted" onClick={open}>
                {params.city || params.country}
              </button>
              <a className="top__link top__link_left">Соискателям</a>
              <a href="#" className="top__link top__link_left">
                Работодателям
              </a>
            </div>

            <div className="header__right">
              <a className="top__link top__link_right" href="#">
                Готовое резюме
              </a>
              <a className="top__link top__link_right" href="#">
                Карьерная консультация
              </a>
              <button className="top__all-service">
                <span className="btn-dotted">Все сервисы</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header__middle middle">
        <div className="container">
          <div className="header__container middle__container">
            <div className="header__left">
              <img
                src="img/logo.svg"
                alt="Логотип HeadHunter"
                className="middle__logo"
              />
              <button className="middle__help">Помощь</button>
            </div>

            <div className="header__right">
              <button className="middle__search-btn deactivate" tabIndex="-1">
                <span>Поиск</span>
              </button>
              <button className="middle__create-resume">Создать резюме</button>
              <button className="middle__sign-in">Войти</button>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom bottom">
        <div className="container">
          <Search />

          <nav className="bottom__navigation navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a
                  href="#"
                  className="navigation__link navigation__link_active"
                >
                  Вакансии
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Резюме
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Компании
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export { Header };
