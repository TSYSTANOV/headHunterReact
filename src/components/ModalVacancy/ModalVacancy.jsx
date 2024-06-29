import { useModalVacancy } from "../../context/ModalVacancy";

function ModalVacancy() {
  const { data, close } = useModalVacancy();
  if (data) {
    return (
      <>
        <div className="overlay overlay_vacancy overlay_active">
          <div className="modal">
            <button className="modal__close" onClick={close}>
              X
            </button>
            <h2 class="modal__title">{data.title}</h2>
            <p class="modal__compensation">{data.compensation}</p>
            <p class="modal__employer">{data.employer}</p>
            <p class="modal__address">{data.address}</p>
            <p class="modal__experience">
              Требуемый опыт работы: {data.experience}
            </p>
            <p class="modal__employment">{data.employment.join(", ")}</p>
            <p class="modal__description">{data.description}</p>
            <div class="modal__skills skills">
              <h2 class="skills__title">Подробнее:</h2>
              <ul class="skills__list">
                {data.skills.map((elem) => {
                  return <li className="skills__item">{elem}</li>;
                })}
              </ul>
            </div>

            <button class="modal__response">Отправить резюме</button>
          </div>
        </div>
      </>
    );
  }
}
export { ModalVacancy };
