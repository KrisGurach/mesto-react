import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ImagePopup from './ImagePopup/ImagePopup.jsx';
import PopupWithForm from '../components/PopupWithForm/PopupWithForm.jsx';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.jsx';
import { useState, useEffect } from 'react';

function App() {
  //стейты для получения информации с сервера
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  //стейты для попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setIsSelectedCardOpen] = useState({})
  const [isImagePopup, setIsImagePopupOpen] = useState(false)

  useEffect(() => {
    api.getWebInfo()
      .then((info) => setCurrentUser(info))
  }, [])

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.toggleLikeCard(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  
  function handleCardDelete(id) {
    api.removeCard(id)
      .then(() => {
        setCards((state) => state.filter(card => card._id !== id));
      })
  }

  function handleUpdateUser(userNewInfo) {
    api.updateProfileData(userNewInfo).then(() => {
      setCurrentUser({
        name: userNewInfo.name,
        about: userNewInfo.about,
        avatar: currentUser.avatar
      });
      closeAllPopups();
    })
  }

  function handleUpdateAvatar({avatar}) {
    api.sendAvatar(avatar).then(() => {
      setCurrentUser({
        name: currentUser.name,
        about: currentUser.about,
        avatar: avatar
      });
      closeAllPopups();
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="container">

      <Header/>
      
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        onCardLike = {handleCardLike}
        onCardDelete = {handleCardDelete}
      />

      <ImagePopup />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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

      <EditAvatarPopup isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
