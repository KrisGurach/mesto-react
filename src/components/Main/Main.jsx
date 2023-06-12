export default function Main() {
    return(
        <main>
        <section className="profile" aria-label="Личные данные">
          <button className="profile__button-edit-avatar" type="button">
            <img src="#" className="profile__avatar" alt="Фото пользователя" />
          </button>
          <div className="profile__info">
            <h1 className="profile__info-name" > </h1>
            <p className="profile__info-profession" />
          </div>
          <button className="profile__edit-button" type="button" />
          <button className="profile__add-button" type="button" />
        </section>
      </main>
    )
}