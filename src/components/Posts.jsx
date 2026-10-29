import { useState } from "react";
import StatusContent from "./StatusContent";
import { STATUS } from "../status";
import draft from "../images/draft.svg";

export default function Posts() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(STATUS.initial);

  function saveDraft() {
    if (!text.trim()) return;
    setStatus(STATUS.draft);
  }

  function published() {
    if (!text.trim()) return;

    setTimeout(() => {
      const isError = Math.random() < 0.3;

      if (isError) {
        setStatus(STATUS.error);
      } else {
        setStatus(STATUS.published);
      }
    }, 1500);
  }

  function reset() {
    setText("");
    setStatus(STATUS.initial);
  }

  return (
    <div className="post">
      <div className="post__info">
        <h1 className="info__title">Создание поста</h1>
        <h2 className="info__paragraph">
          Создайте новый пост, сохраните как черновик или опубликуйте
        </h2>
      </div>

      <div className="post__form">
        <h3 className="form__title">Текст поста</h3>
        <textarea
          placeholder="Введите текст вашего поста..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={status === STATUS.published}
        ></textarea>
        <div className="form__btns-container">
          <button
            className="form__btn save-btn"
            onClick={saveDraft}
            disabled={status === STATUS.published || !text.trim()}
          >
            <img src={draft} alt="draft" />
            <span>Сохранить как черновик</span>
          </button>
          <button
            className="form__btn published-btn"
            onClick={published}
            disabled={status === STATUS.published || !text.trim()}
          >
            Опубликовать
          </button>
          <button className="form__btn reset-btn" onClick={reset}>
            Сбросить
          </button>
        </div>
        <StatusContent status={status}></StatusContent>
      </div>
    </div>
  );
}
