import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function AddPlacePopup({isOpened, onClose, onAddPlace}) {
  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({place, link});
  }

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      ariaLabel="Окно добавления новой фотографии"
      titleButton="Создать"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="place"
        placeholder="Название"
        className="popup__input popup__input_type_place"
        minLength={2}
        maxLength={30}
        required=""
        onChange={(e) => setPlace(e.target.value)}
      />
      <span className="popup__error popup__error_type_place" />
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link"
        pattern="https://.*"
        required=""
        onChange={(e) => setLink(e.target.value)}
      />
      <span className="popup__error popup__error_type_link" />
    </PopupWithForm>
  );
}
