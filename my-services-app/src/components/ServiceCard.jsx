import './ServiceCard.scss';

export default function ServiceCard({ iconClass, title, text, hasButton = false, buttonText = 'Learn More' }) {
  return (
    <article className="item-services">
      <div className="item-services__header">
        <div className="item-services__icon-wrapper">
          <div className={`item-services__icon ${iconClass}`}></div>
        </div>
        <h4 className="item-services__title">{title}</h4>
      </div>
      <div className="item-services__text">
        <p>{text}</p>
      </div>
      {hasButton && (
        <a href="#" className="item-services__button button button--grey">
          {buttonText}
        </a>
      )}
    </article>
  );}
