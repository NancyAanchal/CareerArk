import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/article.css";

const Articles = () => {
  const location = useLocation();
  const topic = location.state;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const urls = [
        `https://api.thenewsapi.com/v1/news/all?search=${topic}&sort= published_on&page=3&api_token=${process.env.REACT_APP_NEWSAPI_KEY}&language=en&limit=3`,
      ];

      try {
        const promises = urls.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const data = await Promise.all(promises);

        const allArticles = data.flatMap((response) => response.data);
        setArticles(allArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    // fetchArticles();
  }, [topic]);

  return (
    <div className="article-detail">
      <h1>Articles related to {topic.toUpperCase()}</h1>
      {loading && (
        <div className="loading">
          <h1>Loading articles...</h1>
        </div>
      )}
      <ul>
        {articles.map((article) => (
          <li key={article.uuid}>
            <h1 className="article-title">{article.title}</h1>
            <img
              src={article.image_url}
              alt={article.title}
              className="article-image"
            />
            <div className="article-content">
              <h4>
                {article.description}
                <span>
                  <a className="url" href={article.url}>
                    Read more
                  </a>
                </span>
              </h4>
            </div>
            <small>
              Published: {new Date(article.published_at).toLocaleDateString()}
            </small>
            <a className="read-more" href={article.url}>
              Read Full Article
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
