import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ImagePopup from './ImagePopup/ImagePopup.jsx';
import PopupWithForm from '../components/PopupWithForm/PopupWithForm.jsx';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setIsSelectedCardOpen] = useState({})
  const [isImagePopup, setIsImagePopupOpen] = useState(false)

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsSelectedCardOpen({})
    setIsImagePopupOpen(false)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick({link, name}) {
    setIsSelectedCardOpen({link, name})
    setIsImagePopupOpen(true)
  }

  return (
    <div className="container">

      <Header/>
      
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
      />

      <ImagePopup />

      <PopupWithForm name='edition' title='Редактировать профиль' ariaLabel='Окно редактирования информации о себе' 
      titleButton='Сохранить' isOpened={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input
          type="text"
          name="name"
          placeholder="Введите имя"
          className="popup__input popup__input_type_name"
          minLength={2}
          maxLength={40}
          required=""
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
        />
        <span className="popup__error popup__error_type_profession" />
      </PopupWithForm>

      <PopupWithForm 
        name='new-card' 
        title='Новое место' 
        ariaLabel='Окно добавления новой фотографии' 
        titleButton='Создать' 
        isOpened={isAddPlacePopupOpen} 
        onClose={closeAllPopups}>
       <input
          type="text"
          name="place"
          placeholder="Название"
          className="popup__input popup__input_type_place"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__error popup__error_type_place" />
        <input
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          pattern="https://.*"
          required=""
        />
        <span className="popup__error popup__error_type_link" />
      </PopupWithForm>

      <PopupWithForm 
        name='avatar' 
        title='Обновить аватар' 
        ariaLabel='Окно редактирования аватара' 
        titleButton='Сохранить'  
        isOpened={isEditAvatarPopupOpen} 
        onClose={closeAllPopups}>
        <input
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_avatar"
          pattern="https://.*"
          required=""
        />
        <span className="popup__error popup__error_type_avatar" />
      </PopupWithForm>

      <PopupWithForm 
        name='remove-photo' 
        title='Вы уверены?' 
        ariaLabel='Окно подтверждения удаления фото' 
        titleButton='Да'>

      </PopupWithForm>

      <ImagePopup 
        card={selectedCard} 
        isOpened={isImagePopup} 
        onClose={closeAllPopups} />

      <Footer/>

    </div>
  );
}

export default App;
