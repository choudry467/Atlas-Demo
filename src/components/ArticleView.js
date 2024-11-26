import ArticleCard from "./ArticleCard";
import "./ArticleView.css";

function ArticleView(props) {
  const { filteredData } = props;
  return (
    <div className="articleViewContainer">
      {filteredData.map((item) => {
        return (
          <ArticleCard
            id={item.id}
            link={item.data.link}
            imgPath={item.data.imgPath}
            headline={item.data.headline}
            text={item.data.text}
          />
        );
      })}
    </div>
  );
}

export default ArticleView;
