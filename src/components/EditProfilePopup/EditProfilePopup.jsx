import React from "react";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({name, about: description});
  }

  return (
    <PopupWithForm
      name="edition"
      title="Редактировать профиль"
      ariaLabel="Окно редактирования информации о себе"
      titleButton="Сохранить"
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Введите имя"
        className="popup__input popup__input_type_name"
        minLength={2}
        maxLength={40}
        required=""
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <span className="popup__error popup__error_type_profession" />
    </PopupWithForm>
  );
}
