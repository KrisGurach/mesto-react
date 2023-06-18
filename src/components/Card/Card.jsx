export default function Card({card, onCardClick}) {
  return (
    <div className="element">
      <img className="element__photo" src={card.link} alt={card.name} 
        onClick={() => onCardClick({link: card.link, name: card.name})} />
      <button className="element__remove" type="button" />
      <div className="element__description">
        <h2 className="element__place">{card.name}</h2>
        <div className="element__likes">
          <button className="element__like" type="button" />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
