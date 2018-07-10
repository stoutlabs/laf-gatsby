import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledArticles = styled.div`
  margin: 0 1rem 3rem;

  @media screen and (min-width: 768px) {
    margin: 0 2rem 4rem;
  }

  div.articles-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  div.article-link {
    position: relative;
    margin: 0.8rem;
    padding: 0.8rem;

    border: 1px solid #eee;

    @media screen and (min-width: 768px) {
      width: calc(50% - 1.6rem);
    }

    a {
      display: block;
      font-size: 1.3rem;
      padding: 0;
      text-align: center;

      div.article-pic-outer-wrapper {
        width: 100%;
        height: auto;
      }

      div.over {
        background-color: rgba(250, 250, 250, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 200ms ease-out;
        overflow: hidden;

        h4 {
          background-color: rgba(120, 120, 120, 0.1);
          color: #777;
          padding: 1rem;
          position: absolute;
          bottom: 0;
          font-size: 1rem;
          font-weight: 700;
          width: 100%;
          transition: transform 200ms ease-out;
          transform: translateY(60px);
        }
      }

      &:hover {
        div.over {
          opacity: 1;

          h4 {
            transform: translateY(0);
          }
        }
      }
    }

    span {
      font-size: 1.05rem;
      padding: 0 1rem;
    }
  }
`;

export const Articles = props => {
  return (
    <StyledArticles className="articles">
      <h3>Published Articles</h3>
      <div className="articles-list">
        {props.articles.map(item => {
          return (
            <div className="article-link" key={item.article_title}>
              <a
                href={
                  item.article_link !== null
                    ? item.article_link.url
                    : "https://letaustinfoster.com/#"
                }
                rel="noopener noreferrer"
                target="_blank"
                title={item.article_title}
              >
                {item.cover_image.localFile !== null && (
                  <Img
                    sizes={item.cover_image.localFile.childImageSharp.sizes}
                    outerWrapperClassName={"article-pic-outer-wrapper"}
                    className="article-pic"
                    position="relative"
                    style={{ padding: "1rem" }}
                    imgStyle={{
                      maxWidth: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                    alt=""
                  />
                )}

                <div className="over">
                  <h4>{item.article_title}</h4>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </StyledArticles>
  );
};

export default Articles;
