import React from "react";
import styled from "styled-components";

const StyledRightDiv = styled.div`
  color: #999;
  transition: opacity 400ms ease-in 150ms;

  h2 {
    border: 3px double #eff2f2;
    border-width: 4px 0;
    color: #333;
    font-size: 1.1rem;
    letter-spacing: 2px;
    line-height: 1.2rem;
    margin: 0.6rem auto 1.5rem;
    padding: 10px 4px 4px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
      margin: 0 auto 3.2rem;
      width: 50%;
    }
  }

  h3 {
    color: #666;
    margin: 1.6rem 0 0;
    letter-spacing: 3px;
  }

  p {
    line-height: 1.8rem;
    margin-bottom: 2rem;
    color: #999;
  }

  padding: 1rem;

  @media screen and (min-width: 768px) {
    width: 50%;
    align-self: center;
  }

  img {
    object-fit: cover;
  }
`;

export const ContactRight = ({ contactInfo }) => {
  return (
    <StyledRightDiv className={`contact-right`}>
      <h2>{contactInfo.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: contactInfo.address }} />

      <div className="contact-phone">
        <h3>PHONE</h3>
        <p>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
        </p>
      </div>

      {contactInfo.fax && (
        <div className="contact-fax">
          <h3>FAX</h3>
          <p>{contactInfo.fax}</p>
        </div>
      )}

      <div className="contact-email">
        <h3>EMAIL</h3>
        <p>
          <a href={"mailto:" + contactInfo.email}>{contactInfo.email}</a>
        </p>
      </div>
    </StyledRightDiv>
  );
};

export default ContactRight;
