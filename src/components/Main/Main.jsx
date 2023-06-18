import { useState, useEffect } from 'react';
import api from '../../utils/Api.js';
import Card from '../Card/Card.jsx';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getWebInfo(), api.getCards()])
  .then(([webInfo, webCards]) => {
    setUserName(webInfo.name);
    setUserDescription(webInfo.about);
    setUserAvatar(webInfo.avatar);
    webCards.forEach(element => element.myId = webInfo._id);
    setCards(webCards);
  })}, [])

    return(
        <main>
        <section className="profile" aria-label="Личные данные">
          <button className="profile__button-edit-avatar" type="button" onClick={onEditAvatar}>
            <img src={userAvatar} className="profile__avatar" alt="Фото пользователя" />
          </button>
          <div className="profile__info">
            <h1 className="profile__info-name">{userName}</h1>
            <p className="profile__info-profession">{userDescription}</p>
          </div>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          <button className="profile__add-button" type="button" onClick={onAddPlace} />
        </section>

        <section className="elements" aria-label="Фотокарточки">
          <div className="gallery">
            {cards.map(data => {
              return( 
                <div className="element" key={data._id}> 
                  <Card card={data} onCardClick={onCardClick} />
                </div>)
              }
            )}
          </div>  
        </section>    
      </main>
    )
}