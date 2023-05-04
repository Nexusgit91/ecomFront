// import React from "react";
// import "./Product.css";
// const cardData = [
//   {
//     image: require("../AppleWatch.jpg"),
//     title: "Card 1",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     link: "#",
//     cta: "Go somewhere",
//   },
//   {
//     image: require("../airdopes.webp"),
//     title: "Card 2",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     link: "#",
//     cta: "Go somewhere",
//   },
//   {
//     image: require("../iphone-14.jpg"),
//     title: "Card 3",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     link: "#",
//     cta: "Go somewhere",
//   },
// ];

// const ProductPage = () => {
//   return (
//     <div className="card-group " style={{ marginTop: "20px" }}>
//       {cardData.map((card, index) => (
//         <div
//           className="card"
//           key={index}
//           style={{ border: "none", marginLeft: "25px" }}
//         >
//           <img src={card.image} alt="Card image " className=" imgui " />
//           <div className="card-body">
//             <h5 className="card-title title">{card.title}</h5>
//             <p className="card-text para">{card.description}</p>

//             <a href={card.link} className="btn btn-primary">
//               {card.cta}
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductPage;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SingleProduct = () => {
  const images = [
    { src: require("../../assets/images/AppleWatch.jpg"), name: "apple watch" },
    { src: require("../../assets/images/airdopes.webp"), name: "apple watch" },
    { src: require("../../assets/images/Galaxy-S23.jpg"), name: "apple watch" },

    { src: require("../../assets/images/iphone-14.jpg"), name: "apple watch" },

    { src: require("../../assets/images/bolt.jpg"), name: "apple watch" },
    { src: require("../../assets/images/victus.jpg"), name: "apple watch" },
    { src: require("../../assets/images/xbox.jpg"), name: "apple watch" },
    { src: require("../../assets/images/oled.jpg"), name: "apple watch" },

    { src: require("../../assets/images/cycle.webp"), name: "apple watch" },
    { src: require("../../assets/images/iphone-14.jpg"), name: "apple watch" },
    { src: require("../../assets/images/MI.jpg"), name: "apple watch" },
  ];

  return (
    <Wrapper>
      <Container fluid>
        <Row>
          {images.map((image, index) => (
            <Col key={index} md={4} className="image-container">
              <img
                src={`${image.src}`}
                alt={`Product Image ${index}`}
                className="img-fluid zoom-button"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .image-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleProduct;
/* .title {
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 44px;
  margin-left: 175px;
  width: 137px;
}

.para {
  margin-top: 11px;
  margin-left: 82px;
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: bold;
  width: 324px;
}

.card {
  display: flex;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.1);
  z-index: 1;
}

.imgui {
  vertical-align: middle;
  border-style: none;
  width: 253px;
  margin-left: 128px;
} */
