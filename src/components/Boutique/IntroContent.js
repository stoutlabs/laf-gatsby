import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const StyledIntro = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  p {
    font-size: 1.3rem;
    max-width: 900px;
    text-align: center;
    margin: 0 auto 2.5rem;

    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }

  div.intro-inner {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }

    div.intro-content {
      @media screen and (min-width: 768px) {
        width: 50%;
        padding-right: 1rem;
      }

      @media screen and (min-width: 960px) {
        width: 66%;
        padding-right: 3rem;
      }

      p {
        font-size: 1.3rem;
        line-height: 1.65;
        word-wrap: normal;

        @media screen and (min-width: 768px) {
          text-align: left;
        }
        @media screen and (min-width: 960px) {
          font-size: 1.3rem;
        }
      }

      a {
        color: #bbb;
        &:hover {
          color: #666;
          text-decoration: underline;
        }
      }
    }

    div.intro-info {
      border: 4px double #ddd;
      background: #fbfbfb;
      padding: 1.5rem;

      @media screen and (min-width: 768px) {
        width: 50%;
        padding: 2rem 1.5rem;
      }

      @media screen and (min-width: 960px) {
        width: 33%;
        padding: 2rem;
      }

      p {
        color: #aaa;
        font-size: 1.15rem;
        margin-bottom: 1.5rem;

        &.gmap,
        &.call {
          margin-bottom: 0.5rem;
        }

        &:last-child {
          margin-bottom: 0;
        }

        a {
          font-size: 1rem;

          color: #777;

          &:hover {
            color: #444;
          }

          svg {
            margin-right: 0.3rem;
          }
        }

        @media screen and (min-width: 768px) {
          text-align: center;
        }
        @media screen and (min-width: 960px) {
          font-size: 1.2rem;
          line-height: 1.35;
        }
      }
    }
  }
`;

export const IntroContent = props => {
  return (
    <StyledIntro className="intro">
      <div className="intro-inner">
        <div className="intro-content" dangerouslySetInnerHTML={{ __html: props.content }} />

        <div className="intro-info">
          <p className="hours">
            <b>HOURS:</b>
            <br />
            {props.hours}
          </p>
          <p className="addy">
            <b>ADDRESS:</b>
            <br />
            <span
              className="intro-content"
              dangerouslySetInnerHTML={{ __html: props.address.html }}
            />
          </p>

          <p className="gmap">
            <a
              href={props.google_maps.url}
              rel="noopener noreferrer"
              title="View on Google Maps"
              target="_blank"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> View Google Map
            </a>
          </p>

          <p className="call">
            <a href={`tel: +1${props.phone.replace(/[\.\-]+/g, "")}`}>
              <FontAwesomeIcon icon={faPhone} /> {props.phone}
            </a>
          </p>

          <p className="email">
            <a href={`mailto:${props.email}`}>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </p>
        </div>
      </div>
    </StyledIntro>
  );
};

export default IntroContent;
