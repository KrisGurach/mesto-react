export default function ImagePopup({card, isOpened, onClose}) {
    return(
        <section
        className={`popup popup_type_photo ${isOpened && 'popup_opened'}`}
        aria-label="Окно увеличенной фотографии"
      >
        <div className="popup__container">
          <button
            className="popup__close-button popup__close-button_type_photo"
            type="button"
            onClick={onClose}
          />
          <figure className="popup__figure">
            <img className="popup__scale-image" src={card ? card.link : "#"} alt={card ? card.name : "#"} /> 
            <figcaption className="popup__figcaption">{card ? card.name : "#"}</figcaption>
          </figure>
        </div>
      </section>
    )
}