import { STATUS } from "../status";
import draft from "../images/draft.svg";
import published from "../images/published.svg";

export default function StatusContent({ status }) {
  switch (status) {
    case STATUS.draft:
      return (
        <div className="status__content status__draft">
          <img src={draft} alt="draft" />
          <div className="status__content-container">
            <h3 className="content__title draft__title">Черновик сохранён</h3>
            <p className="content__paragraph draft__paragraph">
              Ваш пост сохранён как черновик. Вы можете продолжить
              редактирование или опубликовать его.
            </p>
          </div>
        </div>
      );
    case STATUS.published:
      return (
        <div className="status__content status__published">
          <img src={published} alt="published" />
          <div className="status__content-container">
            <h3 className="content__title published__title">
              Пост опубликован!
            </h3>
            <p className="content__paragraph published__paragraph">
              Ваш пост успешно опубликован. Текст теперь нельзя редактировать.
            </p>
          </div>
        </div>
      );
    case STATUS.error:
      return <div className="status__content status__error">
        <h3 className="content__title error__title">Ошибка!</h3>
        
        </div>;
    default:
      return null;
  }
}
