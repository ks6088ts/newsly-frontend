import React from "react";
import { useQuery, gql } from "@apollo/client";

interface Source {
  id: string;
  name: string;
}

interface Article {
  id: string;
  url: string;
  title: string;
  source: Source;
}

interface ArticleData {
  articles: Article[];
}

const GET_ARTICLES = gql`
  query GetArticle {
    articles {
      id
      url
      title
      source {
        id
        name
      }
    }
  }
`;

export function ArticleList() {
  const { loading, data } = useQuery<ArticleData>(GET_ARTICLES);
  return (
    <div>
      <h3>ArticleList</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>article</th>
                <th>source</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.articles.map((article) => (
                  <tr key={article.id}>
                    <td>
                      <a href={article.url}>{article.title}</a>
                    </td>
                    <td>
                      {article.source.id}: {article.source.name}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
