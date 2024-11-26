import "./ArticleCard.css";

function ArticleCard(props) {
  const { id, link, imgPath, headline, text } = props;
  return (
    <a target="_blank" href={link}>
      <div className="articleCardItem" key={id}>
        <img className="articleCardThumbnail" src={imgPath} />
        <div className="articleCardContent">
          <h2 className="articleCardHeadline">{headline}</h2>
          <p className="articleCardText">{text}</p>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
