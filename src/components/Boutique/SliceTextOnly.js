import React from "react";
import styled from "styled-components";

const StyledTextOnly = styled.div`
  margin: 0 0 3rem;
  padding: 3rem 0 0;
  border-top: 1px solid #ddd;

  div.slice-inner {
    padding: 0 1rem;

    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }
`;

export const SliceTextOnly = ({ textOnly }) => {
  return (
    <StyledTextOnly className="slice-textOnly">
      <div className="slice-inner">
        <div
          dangerouslySetInnerHTML={{ __html: textOnly.content.html }}
          className="slice_twi_content"
        />
      </div>
    </StyledTextOnly>
  );
};

export default SliceTextOnly;
