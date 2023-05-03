import React from "react";
import "./Video.css";
import styled from "styled-components";

const VideoBanner = (props) => {
  return (
    <Wrapper className="video-banner">
      <video autoPlay loop muted>
        <source
          src={require(`../Video/${props.videoName}.mp4`)}
          type="video/mp4"
        />
      </video>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media only screen and (max-width: 500px) {
    .video-banner,video {
      width: 100vw;
    }
  }
`;

export default VideoBanner;
