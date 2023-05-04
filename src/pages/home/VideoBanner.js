import React from "react";
import styled from "styled-components";

const VideoBanner = (props) => {
  return (
    <Wrapper>
      <div className="video-banner">
        <video autoPlay loop muted>
          <source
            src={require(`../../assets/video/${props.videoName}.mp4`)}
            type="video/mp4"
          />
        </video>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .video-banner {
    height: 80vh;
    background-color: black;
    width: 100vw;
  }

  .video-banner video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .video-banner {
      height: 60vh;
      background-color: black;
      padding-bottom: 0%;
    }

    .video-banner video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 500px) {
    .video-banner,
    video {
      width: 100vw;
    }
  }
`;

export default VideoBanner;
