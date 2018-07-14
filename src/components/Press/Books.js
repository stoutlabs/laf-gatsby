import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledBooks = styled.div`
  margin: 0 0 4rem;
  padding: 1rem;
  text-align: center;

  p {
    margin: 0 0 1.5rem;
  }

  div.books-list {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 650px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    div.book {
      margin: 0 1rem 2rem;
      width: 100%;
      text-align: center;

      @media screen and (min-width: 650px) {
        width: calc(50% - 2rem);
      }

      div.book-image {
        width: 100%;
        max-width: 300px;
        margin: 0 auto 1rem;
      }

      h4 {
        display: inline-block;
        text-decoration: underline;
        font-size: 0.95rem;
      }
    }
  }
`;

export const Books = ({ books }) => {
  return (
    <StyledBooks className="books">
      <h3>Books</h3>
      <p>
        (Available From{" "}
        <Link to="/palm-beach/palm-beach-boutique">Leta Austin Foster Boutique</Link>)
      </p>

      <div className="books-list">
        {books.map(book => {
          return (
            <div className="book" key={book.book_title}>
              <div className="book-image">
                <Img
                  sizes={book.book_image.localFile.childImageSharp.sizes}
                  outerWrapperClassName={"book-image-outer-wrapper"}
                  className="book-image-wrapper"
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
              </div>
              <h4>{book.book_title}</h4>
            </div>
          );
        })}
      </div>
    </StyledBooks>
  );
};

export default Books;
