import React from "react";
import "./TypingAnimation.css";
import styled from "styled-components";

const TypingAnimation = () => {
  return (
    <Wrapper>
      <div className="bouncing-word-container ">
        <div
          className="bouncing-letters-container"
          style={{
            fontFamily: "roboto",
            fontSize: "10px",
            marginTop: "16px",
            marginRight: "20px",
          }}
        >
          <div className="bouncing-letter red">B</div>
          <div className="bouncing-letter orange">E</div>
          <div className="bouncing-letter yellow">G</div>
          <div className="bouncing-letter green">U</div>
          <div className="bouncing-letter blue">M</div>
          <div className="bouncing-letter indigo">P</div>
          <div className="bouncing-letter purple">U</div>
          <div className="bouncing-letter pink">L</div>
          <div className="bouncing-letter brown">L</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bouncing-word-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
  }

  .curly-brace {
    font-size: 50px;
    font-weight: bold;
  }

  .bouncing-letters-container {
    display: flex;
  }

  .bouncing-letter {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    animation-name: bounce;
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transition: transform 0.3s ease-in-out;
  }

  .red {
    background-color: red;
  }

  .orange {
    background-color: orange;
  }

  .yellow {
    background-color: rgb(237, 237, 23);
  }

  .green {
    background-color: rgb(122, 232, 122);
  }

  .blue {
    background-color: rgb(169, 169, 190);
  }

  .indigo {
    background-color: rgb(137, 60, 191);
  }

  .purple {
    background-color: rgb(215, 26, 108);
  }

  .pink {
    background-color: pink;
  }

  .brown {
    background-color: brown;
  }

  .bouncing-letter:hover {
    transform: scale(1.2);
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-18px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default TypingAnimation;
