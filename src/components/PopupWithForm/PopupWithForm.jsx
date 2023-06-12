export default function PopupWithForm({name, title, ariaLabel, titleButton, children}) {
    return(

      <div
        className={`popup popup_type_${name}`}
        aria-label={ariaLabel}
      >
        <div className="popup__container popup__container_min-size">
          <button className="popup__close-button" type="button"/>
          <h2 className="popup__edit">{title}</h2>
          <form noValidate="" className="popup__form" name={`form-of-${name}`}>
            {children}
            <button type="submit" value={titleButton} className="popup__save-button">
              {titleButton}
            </button>
          </form>
        </div>
      </div>
    )
}