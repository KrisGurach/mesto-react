export default function Card(data) {
  return (
    <div className="element">
      <img className="element__photo" src={data.card.link} alt={data.card.name} />
      <button className="element__remove" type="button" />
      <div className="element__description">
        <h2 className="element__place">{data.card.name}</h2>
        <div className="element__likes">
          <button className="element__like" type="button" />
          <span className="element__like-counter">{data.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
