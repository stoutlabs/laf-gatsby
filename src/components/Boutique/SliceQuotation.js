import React from "react";
import styled from "styled-components";

const StyledQuotation = styled.div`
  margin: 0 0 3rem;
  padding: 3rem 0 0;
  border-top: 1px solid #ddd;

  div.slice-inner {
    padding: 0 1rem;
    text-align: center;
    padding: 0 1rem;

    @media screen and (min-width: 768px) {
      padding: 0 3rem;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.75;
    }
  }
`;

export const SliceTextOnly = ({ content }) => {
  return (
    <StyledQuotation className="slice-quotation">
      <div className="slice-inner">
        <div
          dangerouslySetInnerHTML={{ __html: content.content.html }}
          className="slice_quotation_content"
        />
      </div>
    </StyledQuotation>
  );
};

export default SliceTextOnly;
