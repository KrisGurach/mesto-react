import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditAvatarPopup({isOpened, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const avatar = avatarRef.current.value;
    onUpdateAvatar(avatar);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      ariaLabel="Окно редактирования аватара"
      titleButton="Сохранить"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        ref={avatarRef}
        placeholder="Ссылка на аватар"
        className="popup__input popup__input_type_avatar"
        pattern="https://.*"
        required=""
      />
      <span className="popup__error popup__error_type_avatar" />
    </PopupWithForm>
  );
}
