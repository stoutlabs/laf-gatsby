import React from "react";
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
    div.book {
      margin: 0 0 1rem;
      h4 {
        text-decoration: underline;
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
              <h4>{book.book_title}</h4>
            </div>
          );
        })}
      </div>
    </StyledBooks>
  );
};

export default Books;
