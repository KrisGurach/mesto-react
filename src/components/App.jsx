import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx';
import Footer from '../components/Footer/Footer.jsx';
import PopupWithForm from '../components/PopupWithForm/PopupWithForm.jsx';

function App() {
  return (
    <div className="container">

      <Header/>
      
      <Main/>

      <PopupWithForm name='photo' title='' ariaLabel='Окно увеличенной фотографии' titleButton=''>
      </PopupWithForm>

      <PopupWithForm name='edition' title='Редактировать профиль' ariaLabel='Окно редактирования информации о себе' titleButton='Сохранить'>
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

      <PopupWithForm name='new-card' title='Новое место' ariaLabel='Окно добавления новой фотографии' titleButton='Создать'>
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

      <PopupWithForm name='avatar' title='Обновить аватар' ariaLabel='Окно редактирования аватара' titleButton='Сохранить'>
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

      <PopupWithForm name='remove-photo' title='Вы уверены?' ariaLabel='Окно подтверждения удаления фото' titleButton='Да'>

      </PopupWithForm>

      {/* <section
        className="popup popup_type_photo"
        aria-label="Окно увеличенной фотографии"
      >
        <div className="popup__container">
          <button
            className="popup__close-button popup__close-button_type_photo"
            type="button"
          />
          <figure className="popup__figure">
            <img className="popup__scale-image" src="#" alt="#" />
            <figcaption className="popup__figcaption" />
          </figure>
        </div>
      </section>

      <section
        className="popup popup_type_edition"
        aria-label="Окно редактирования информации о себе"
      >
        <div className="popup__container popup__container_min-size">
          <button
            className="popup__close-button popup__close-button_type_edition"
            type="button"
          />
          <form
            noValidate=""
            className="popup__form popup__form_type_edition"
            name="form-of-edition"
          >
            <h2 className="popup__edit">Редактировать профиль</h2>
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
            <button type="submit" value="Сохранить" className="popup__save-button">
              Сохранить
            </button>
          </form>
        </div>
      </section>

      <section
        className="popup popup_type_new-card"
        aria-label="Окно добавления новой фотографии"
      >
        <div className="popup__container popup__container_min-size">
          <button
            className="popup__close-button popup__close-button_type_new-card"
            type="button"
          />
          <form
            noValidate=""
            className="popup__form popup__form_type_new-card"
            name="form-of-new-card"
          >
            <h2 className="popup__edit">Новое место</h2>
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
            <button type="submit" value="Создать" className="popup__save-button">
              Создать
            </button>
          </form>
        </div>
      </section>

      <section
        className="popup popup_type_avatar"
        aria-label="Окно редактирования аватара"
      >
        <div className="popup__container popup__container_min-size">
          <button
            className="popup__close-button popup__close-button_type_edition"
            type="button"
          />
          <form
            noValidate=""
            className="popup__form popup__form_type_avatar"
            name="form-of-avatar"
          >
            <h2 className="popup__edit">Обновить аватар</h2>
            <input
              type="url"
              name="avatar"
              placeholder="Ссылка на аватар"
              className="popup__input popup__input_type_avatar"
              pattern="https://.*"
              required=""
            />
            <span className="popup__error popup__error_type_avatar" />
            <button type="submit" value="Сохранить" className="popup__save-button">
              Сохранить
            </button>
          </form>
        </div>
      </section>

      <section
        className="popup popup_type_remove-photo"
        aria-label="Окно подтверждения удаления фото"
      >
        <div className="popup__container popup__container_min-size">
          <button
            className="popup__close-button popup__close-button_type_remove-photo"
            type="button"
          />
          <form noValidate="" className="popup__form" name="form-of-remove">
            <h2 className="popup__heading">Вы уверены?</h2>
            <button type="submit" className="popup__save-button">
              Да
            </button>
          </form>
        </div>
      </section> */}

      <Footer/>

    </div>
  );
}

export default App;
