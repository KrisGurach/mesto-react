import React from "react";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


export default function EditProfilePopup({ isOpen, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);  
  const [nameValue, setName] = useState('');
  const [descriptionValue, setDescription] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  return (
    <PopupWithForm
      name="edition"
      title="Редактировать профиль"
      ariaLabel="Окно редактирования информации о себе"
      titleButton="Сохранить"
      isOpened={isOpen}
      onClose={onClose}
    >
      <input
        type="text"
        name="name"
        placeholder="Введите имя"
        className="popup__input popup__input_type_name"
        minLength={2}
        maxLength={40}
        required=""
        value={nameValue}
        onChange={handleNameChange}
      />
      <span className="popup__error popup__error_type_name" />
      <input
        type="text"
        name="profession"
        placeholder="Введите профессию"
        className="popup__input popup__input_type_profession"
        minLength={2}
        maxLength={400}
        required=""
        value={descriptionValue}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error popup__error_type_profession" />
    </PopupWithForm>
  );
}
