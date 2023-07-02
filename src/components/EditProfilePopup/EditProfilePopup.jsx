import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";


export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);  
  const {values, handleChange, setValues} = useForm(currentUser);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(values);
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
        value={values.name || ''}
        onChange={handleChange}
      />
      <span className="popup__error popup__error_type_name" />
      <input
        type="text"
        name="about"
        placeholder="Введите профессию"
        className="popup__input popup__input_type_profession"
        minLength={2}
        maxLength={400}
        required=""
        value={values.about || ''}
        onChange={handleChange}
      />
      <span className="popup__error popup__error_type_profession" />
    </PopupWithForm>
  );
}
