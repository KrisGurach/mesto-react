import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useForm } from "../../hooks/useForm";

export default function AddPlacePopup({isOpened, onClose, onAddPlace}) {
  const {values, handleChange} = useForm({});


  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace(values);
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
        value={values.place || ''}
        onChange={handleChange}
      />
      <span className="popup__error popup__error_type_place" />
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link"
        pattern="https://.*"
        required=""
        value={values.link || ''}
        onChange={handleChange}
      />
      <span className="popup__error popup__error_type_link" />
    </PopupWithForm>
  );
}
